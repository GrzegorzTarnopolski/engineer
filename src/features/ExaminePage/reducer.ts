import { ExamineActions } from './types'
import { initialState, ACTIONS } from './constants'

export const examinePageReducer = (state = initialState, action: ExamineActions) => {
    switch (action.type) {
        case ACTIONS.EXAMINE_TEST_END:
            return {
                ...state,
                result: action.payload.results
            }
        default:
            return state
    }
}
