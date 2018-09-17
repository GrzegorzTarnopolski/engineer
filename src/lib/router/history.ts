import createBrowserHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

export const history = createBrowserHistory()

history.listen(location => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

export const routerMiddlewareWithHistory = routerMiddleware(history)
