import { applyMiddleware, compose, createStore } from 'redux'
import { middlewares } from './middlewares'
import { rootReducer } from './root-reducer'
import { IState } from './state'

// tslint:disable-next-line:no-any
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhacer = composeEnhancers(applyMiddleware(...middlewares))

export const store = createStore<IState>(rootReducer, enhacer)
