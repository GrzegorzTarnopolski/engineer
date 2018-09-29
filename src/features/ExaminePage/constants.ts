import { ExaminePageReducer } from './types'

export const initialState: ExaminePageReducer = {
    result: {}
}

export enum ACTIONS {
    EXAMINE_TEST_END = 'EXAMINE_TEST_END'
}
