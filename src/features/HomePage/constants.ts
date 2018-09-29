import { HomePageReducer } from './types'

export const initialState: HomePageReducer = {
    colors: [],
    time: 0
}

export enum ACTIONS {
    EXAMINE_TEST_START = 'EXAMINE_TEST_START'
}
