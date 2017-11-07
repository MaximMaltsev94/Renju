import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
    let middleware = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middleware = [...middleware, createLogger()]
    }

    return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}