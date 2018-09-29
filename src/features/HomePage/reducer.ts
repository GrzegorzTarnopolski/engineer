import { HomePageActions } from './types'
import { initialState, ACTIONS } from './constants'

export const homePageReducer = (state = initialState, action: HomePageActions) => {
    switch (action.type) {
        case ACTIONS.EXAMINE_TEST_START:
            return {
                ...state,
                colors: action.payload.pickedColors,
                time: action.payload.time
            }
        default:
            return state
    }
}
