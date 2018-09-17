import { routerReducer as reducer, RouterState } from 'react-router-redux'
import { Reducer } from 'redux'

export const routerReducer = reducer

export type RouterReducer = Reducer<RouterState>
