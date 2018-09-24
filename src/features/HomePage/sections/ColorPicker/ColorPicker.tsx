import React from 'react'
import styled from 'styled-components'
import { CirclePicker } from 'react-color'
import { ColorType } from 'types'

type ColorPickerProps = {
    colorPickerShown: boolean,
    color: string,
    onColorChange(color: ColorType): void
}

const renderColorPicker = (colorPickerShown: boolean, color: string , onColorChange: (color: ColorType) => void) => colorPickerShown ? (
    <ColorPickerWrapper>
        <CirclePicker
            color={color}
            onChangeComplete={onColorChange}
            circleSize={50}
            circleSpacing={10}
        />
    </ColorPickerWrapper>
) : null

export const ColorPicker: React.StatelessComponent<ColorPickerProps> = props =>
    renderColorPicker(props.colorPickerShown, props.color, props.onColorChange)

export const ColorPickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`
