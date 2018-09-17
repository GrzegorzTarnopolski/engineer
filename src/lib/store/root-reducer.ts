import { combineReducers } from 'redux'
import { IState } from './state'
import { routerReducer } from '../router'

export const rootReducer = combineReducers<IState>({
  router: routerReducer
})
