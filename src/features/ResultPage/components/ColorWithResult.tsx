import React from 'react'
import styled from 'styled-components'

type ColorWithResult = {
    color: string,
    time: number
}

export const ColorWithResult: React.StatelessComponent<ColorWithResult> = props => (
    <Wrapper>
        <ColorBlock
            style={{
                backgroundColor: props.color
            }}
        />
        <TimeLabel>
            {(props.time / 1000).toFixed(2)}s
        </TimeLabel>
    </Wrapper>
)

export const Wrapper = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  flex-direction: column;
`

export const ColorBlock = styled.div`
  width: 50px;
  height: 50px;
`

export const TimeLabel = styled.div``
