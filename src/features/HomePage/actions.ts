import { createAction } from 'utils'
import { ACTIONS } from './constants'

export const homePageActions = {
    onTestStart: () => createAction(ACTIONS.EXAMINE_TEST_START)
}
