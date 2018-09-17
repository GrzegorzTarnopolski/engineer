import React from 'react'
import styled from 'styled-components'

type HomePageProps = {}

export class HomePage extends React.Component<HomePageProps> {
    render() {
        return (
            <Wrapper>
                Home Page
            </Wrapper>
        )
    }
}

export const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`
