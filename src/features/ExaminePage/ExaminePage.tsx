import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'
import { Dispatch, RootReducer, Nullable, ColorResult } from 'types'
import { history } from 'lib/router'
import { ColorWithTimer } from './components'
import { examineActions } from './actions'

interface ExaminePageProps extends RouteComponentProps<{}> {
    colors: Array<string>,
    time: number,
    onExamineEnd: typeof examineActions.onExamineEnd
}

type ExaminePageState = {
    results: Array<ColorResult>,
    timerFinished: boolean
}

export class ExaminePage extends React.Component<ExaminePageProps, ExaminePageState> {
    state: ExaminePageState = {
        results: [],
        timerFinished: false
    }

    private timer: Nullable<NodeJS.Timer> = null

    constructor(props: ExaminePageProps) {
        super(props)

        this.renderColors = this.renderColors.bind(this)
        this.redirectToResultPage = this.redirectToResultPage.bind(this)
        this.onTimeUpdate = this.onTimeUpdate.bind(this)
    }

    componentDidMount() {
        this.timer = setTimeout(this.redirectToResultPage, this.props.time * 1000)

        const results = this.props.colors.reduce((acc, value) => {
            return [
                ...acc,
                {
                    color: value,
                    time: 0
                }
            ]
        }, [])

        this.setState({
            results
        })
    }

    onTimeUpdate(indexOfColor: number, newTime: number) {
        const newResults = [...this.state.results.map((value, index) => {
            if (index === indexOfColor) {
                return {
                    color: value.color,
                    time: newTime
                }
            }

            return value
        })]

        this.setState({
            results: newResults
        })
    }

    redirectToResultPage() {
        if (this.timer) {
            clearTimeout(this.timer)
        }

        this.setState({
            timerFinished: true
        })

        this.props.onExamineEnd(this.state.results)

        history.push('/wynik')
    }

    renderColors() {
        return this.props.colors.map((value, index) => (
            <ColorWithTimer
                key={index}
                color={value}
                onTimeChange={(newTime: number) => this.onTimeUpdate(index, newTime)}
                timerFinished={this.state.timerFinished}
            />
        ))
    }

    render() {
        return (
            <Wrapper>
                {this.renderColors()}
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ home }: RootReducer) => ({
    colors: home.colors,
    time: home.time
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onExamineEnd: compose(dispatch, examineActions.onExamineEnd)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExaminePage)

export const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-wrap: wrap;
`
