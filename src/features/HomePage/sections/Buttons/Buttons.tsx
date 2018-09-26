import React from 'react'
import styled from 'styled-components'

type ButtonsProps = {
    showColorPicker(): void,
    onTestBegin(): void
}

export const Buttons: React.StatelessComponent<ButtonsProps> = props => (
    <Wrapper>
        <AddButton onClick={props.showColorPicker}>
            Dodaj kolor
        </AddButton>
        <NavigationButton onClick={props.onTestBegin}>
            Rozpocznij test
        </NavigationButton>
    </Wrapper>
)

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const AddButton = styled.div`
    width: 150px;
    height: 40px;
    margin: 30px;
    cursor: pointer;
    background-color: #35e83c;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    &: hover {
    background-color: #39b33e;
    }
`

export const NavigationButton = styled.div`
    width: 150px;
    height: 40px;
    margin: 30px;
    cursor: pointer;
    background-color: #35e83c;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    &: hover {
    background-color: #39b33e;
    }
`
