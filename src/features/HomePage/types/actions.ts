import { ActionsUnion } from 'utils'
import { homePageActions } from '../actions'

export type HomePageActions = ActionsUnion<typeof homePageActions>
