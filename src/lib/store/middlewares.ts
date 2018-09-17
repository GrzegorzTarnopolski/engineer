import { Middleware } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddlewareWithHistory } from '../router'

const logger = createLogger({
  predicate: () => process.env.NODE_ENV === 'development'
})

export const middlewares: ReadonlyArray<Middleware> = [
  routerMiddlewareWithHistory,
  logger
]
