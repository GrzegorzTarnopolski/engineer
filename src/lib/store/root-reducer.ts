import { combineReducers } from 'redux'
import { IState } from './state'
import { routerReducer } from '../router'
import examinePageReducer from 'features/ExaminePage'
import homePageReducer from 'features/HomePage'

export const rootReducer = combineReducers<IState>({
    router: routerReducer,
    examine: examinePageReducer,
    home: homePageReducer
})
