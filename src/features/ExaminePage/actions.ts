import { createAction } from 'utils'
import { ColorResult } from 'types'
import { ACTIONS } from './constants'

export const examineActions = {
    onExamineEnd: (results: Array<ColorResult>) => createAction(ACTIONS.EXAMINE_TEST_END, { results })
}
