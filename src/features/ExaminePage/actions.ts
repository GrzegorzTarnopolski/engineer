import { createAction } from 'utils'
import { ACTIONS } from './constants'

export const examineActions = {
    onExamineEnd: () => createAction(ACTIONS.EXAMINE_TEST_END)
}
