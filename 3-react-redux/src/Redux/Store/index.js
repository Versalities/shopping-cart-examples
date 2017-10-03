import { createStore, applyMiddleware } from 'redux'

import { createLogger } from 'redux-logger'

import reducers from '../Reducers'

const middleware = applyMiddleware(createLogger());

export default createStore(reducers, middleware)
