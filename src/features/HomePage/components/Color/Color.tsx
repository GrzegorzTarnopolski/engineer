import React from 'react'
import styled from 'styled-components'

type ColorProps = {
    color: string,
    onColorClick(color: string): void
}

export const Color: React.StatelessComponent<ColorProps> = props => (
    <Wrapper
        onClick={() => props.onColorClick(props.color)}
        style={{
            backgroundColor: props.color,
        }}
    />
)

export const Wrapper = styled.div`
    display: flex;
    width: 70px;
    height: 70px;
    margin: 5px;
    cursor: pointer;
`
