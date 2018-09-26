import React from 'react'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import styled from 'styled-components'
import { history } from 'lib/router'
import { HomePage } from './HomePage'
import { ExaminePage } from './ExaminePage'

type RouterProps = {}

export const Router: React.StatelessComponent<RouterProps> = props => (
    <ConnectedRouter history={history}>
        <Main>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={HomePage}
                />
                <Route
                    exact
                    path="/test"
                    component={ExaminePage}
                />
            </Switch>
        </Main>
    </ConnectedRouter>
)

const Main = styled.main`
  width: 100%;
  margin: 0;
`
