import React from 'react'
import styled from 'styled-components'

type ColorProps = {
    color: string
}

export const Color: React.StatelessComponent<ColorProps> = props => (
    <Wrapper
        style={{
            backgroundColor: props.color
        }}
    />
)

export const Wrapper = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  margin: 5px;
`
