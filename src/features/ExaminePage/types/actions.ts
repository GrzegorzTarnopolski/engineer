import { ActionsUnion } from 'utils'
import { examineActions } from '../actions'

export type ExamineActions = ActionsUnion<typeof examineActions>
