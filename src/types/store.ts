import { RouterState } from 'react-router-redux'
import { Dispatch as ReduxDispatch, Reducer } from 'redux'
import { HomePageReducer } from 'features/HomePage'
import { ExaminePageReducer } from 'features/ExaminePage'

export type RouterReducer = Reducer<RouterState>

export type RootReducer = {
    router: RouterReducer,
    examine: ExaminePageReducer,
    home: HomePageReducer
}

export type Dispatch = ReduxDispatch<RootReducer>
