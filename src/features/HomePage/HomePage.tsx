import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'
import { ColorType, RootReducer, Dispatch } from 'types'
import { homePageActions } from './actions'
import { Buttons, ColorPicker, Colors } from './sections'

interface HomePageProps extends RouteComponentProps<{}> {
    onTestStart: typeof homePageActions.onTestStart
}

type HomePageState = {
    color: string,
    pickedColors: Array<string>,
    colorPickerShown: boolean
}

export class HomePage extends React.Component<HomePageProps, HomePageState> {
    state: HomePageState = {
        color: '',
        colorPickerShown: false,
        pickedColors: []
    }

    constructor(props: HomePageProps) {
        super(props)

        this.onColorChange = this.onColorChange.bind(this)
        this.showColorPicker = this.showColorPicker.bind(this)
        this.onColorClick = this.onColorClick.bind(this)
    }

    onColorChange(color: ColorType) {
        if (!this.state.pickedColors.some(value => color.hex === value)) {
            const newArray = [...this.state.pickedColors].concat(color.hex)
            this.setState({
                pickedColors: newArray
            })
        }

        this.setState({
            color: color.hex,
            colorPickerShown: false
        })
    }

    onColorClick(color: string) {
        const newArray = this.state.pickedColors.filter(value => value !== color)

        this.setState({
            pickedColors: newArray
        })
    }

    showColorPicker() {
        this.setState({
            colorPickerShown: true
        })
    }

    render() {
        return (
            <Wrapper>
                <Buttons
                    showColorPicker={this.showColorPicker}
                />
                <Colors
                    colors={this.state.pickedColors}
                    onColorClick={this.onColorClick}
                />
                <ColorPicker
                    color={this.state.color}
                    colorPickerShown={this.state.colorPickerShown}
                    onColorChange={this.onColorChange}
                />
            </Wrapper>
        )
    }
}

const mapStateToProps = ({}: RootReducer) => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onTestStart: compose(dispatch, homePageActions.onTestStart)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)

export const Wrapper = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
