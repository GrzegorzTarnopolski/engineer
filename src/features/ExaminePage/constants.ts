import { ExamineReducer } from './types'

export const initialState: ExamineReducer = {
    result: {}
}

export enum ACTIONS {
    EXAMINE_TEST_END = 'EXAMINE_TEST_END'
}
