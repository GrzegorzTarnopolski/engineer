import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'
import { Dispatch, RootReducer } from 'types'
import { examineActions } from './actions'

interface ExaminePageProps extends RouteComponentProps<{}> {
    colors: Array<string>,
    onExamineEnd: typeof examineActions.onExamineEnd
}

type ExaminePageState = {}

export class ExaminePage extends React.Component<ExaminePageProps, ExaminePageState> {
    constructor(props: ExaminePageProps) {
        super(props)

        this.renderColors = this.renderColors.bind(this)
    }

    renderColors() {
        return this.props.colors.map((value, index) => (
            <Test
                key={index}
                style={{
                    backgroundColor: value
                }}
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
    colors: home.colors
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

export const Test = styled.div`
    flex: 1;
    flex-basis: 25%;
`
