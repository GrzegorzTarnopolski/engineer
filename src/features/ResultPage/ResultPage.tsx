import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { RootReducer, ColorResult } from 'types'
import { history } from 'lib/router'
import { ColorWithResult } from './components'

type ResultPageProps = {
    results: Array<ColorResult>
}

export class ResultPage extends React.Component<ResultPageProps> {
    renderResults() {
        return (
            <Fragment>
                {this.renderToHome()}
                <ResultsWrapper>
                    {this.props.results.map((value, index) => (
                        <ColorWithResult
                            key={index}
                            color={value.color}
                            time={value.time}
                        />
                    ))}
                </ResultsWrapper>
            </Fragment>
        )
    }

    renderToHome() {
        return (
            <HomePage onClick={() => history.push('/')}>
                Powrót do strony początkowej.
            </HomePage>
        )
    }

    renderMain() {
        return this.props.results.length > 0
            ? this.renderResults()
            : this.renderToHome()
    }

    render() {
        return (
            <Wrapper>
                {this.renderMain()}
            </Wrapper>
        )
    }
}

const mapStateToProps = ({ examine }: RootReducer) => ({
    results: examine.result
})

export default connect(
    mapStateToProps
)(ResultPage)

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const ResultsWrapper = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
`

export const HomePage = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
