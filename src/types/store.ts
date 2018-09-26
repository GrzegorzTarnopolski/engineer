import { RouterState } from 'react-router-redux'
import { Dispatch as ReduxDispatch, Reducer } from 'redux'
import { HomePageReducer } from 'features/HomePage'

export type RouterReducer = Reducer<RouterState>

export type RootReducer = {
    router: RouterReducer,
    home: HomePageReducer
}

export type Dispatch = ReduxDispatch<RootReducer>
