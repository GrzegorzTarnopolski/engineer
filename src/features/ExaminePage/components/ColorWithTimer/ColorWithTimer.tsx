import React from 'react'
import styled from 'styled-components'

type ColorWithTimerProps = {
    color: string,
    timerFinished: boolean,
    onTimeChange(time: number): void
}

type ColorWithTimerState = {
    spendTime: number,
    timeStart: number,
    mouseOver: boolean
}

export class ColorWithTimer extends React.Component<ColorWithTimerProps, ColorWithTimerState> {
    state: ColorWithTimerState = {
        spendTime: 0,
        timeStart: 0,
        mouseOver: false
    }

    constructor(props: ColorWithTimerProps) {
        super(props)

        this.onMouseEnterColor = this.onMouseEnterColor.bind(this)
        this.onMouseLeaveColor = this.onMouseLeaveColor.bind(this)
    }

    componentWillReceiveProps(nextProps: ColorWithTimerProps) {
        if (nextProps.timerFinished && this.state.mouseOver) {
            return this.onMouseLeaveColor()
        }
    }

    onMouseEnterColor() {
        this.setState({
            timeStart: Date.now(),
            mouseOver: true
        })
    }

    onMouseLeaveColor() {
        const timeDifference = Date.now() - this.state.timeStart

        this.setState({
            spendTime: this.state.spendTime + timeDifference,
            mouseOver: false
        })

        this.props.onTimeChange(this.state.spendTime + timeDifference)
    }

    render() {
        return (
            <Color
                style={{
                    backgroundColor: this.props.color
                }}
                onMouseOver={this.onMouseEnterColor}
                onMouseLeave={this.onMouseLeaveColor}
            />
        )
    }
}

export const Color = styled.div`
    flex: 1;
    flex-basis: 25%;
`
