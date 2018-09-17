import React from 'react'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'
import { store } from 'lib/store'
import { Router } from './Router'

/* tslint:disable no-unused-expression */
const injectGlobalStyles = () => {
    injectGlobal`
    * {
      box-sizing: border-box;
    }

    body {
      font-family: Lato;
      margin: 0;
      padding: 0;
    }
  `
}

/* tslint:enable no-unused-expression */

export class App extends React.Component {
    componentDidMount() {
        injectGlobalStyles()
    }

    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        )
    }
}
