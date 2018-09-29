import { RouterState } from 'react-router-redux'
import { ExaminePageReducer } from 'features/ExaminePage'
import { HomePageReducer } from 'features/HomePage'

export interface IState {
    readonly router: RouterState,
    readonly examine: ExaminePageReducer,
    readonly home: HomePageReducer
}
