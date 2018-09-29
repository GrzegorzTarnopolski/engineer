import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { RootReducer, ColorResult } from 'types'
import { ColorWithResult } from './components'

type ResultPageProps = {
    results: Array<ColorResult>
}

export class ResultPage extends React.Component<ResultPageProps> {
    renderResults() {
        return this.props.results.map((value, index) => (
            <ColorWithResult
                key={index}
                color={value.color}
                time={value.time}
            />
        ))
    }

    render() {
        return (
            <Wrapper>
                {this.renderResults()}
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
`
