import { createAction } from 'utils'
import { ACTIONS } from './constants'

export const homePageActions = {
    onTestStart: (pickedColors: Array<string>) => createAction(ACTIONS.EXAMINE_TEST_START, { pickedColors })
}
