import { RouterState } from 'react-router-redux'
import { ExamineReducer } from 'features/ExaminePage'
import { HomePageReducer } from 'features/HomePage'

export interface IState {
    readonly router: RouterState,
    readonly examine: ExamineReducer,
    readonly home: HomePageReducer
}
