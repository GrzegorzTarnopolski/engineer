import React from 'react'
import styled from 'styled-components'
import { Color } from '../../components'

type ColorsProps = {
    colors: Array<string>
}

export const Colors: React.StatelessComponent<ColorsProps> = props => (
    <Wrapper>
        {props.colors.map((value, index) =>
            <Color
                key={index}
                color={value}
            />
        )}
    </Wrapper>
)

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 50px;
  justify-content: center;
`
