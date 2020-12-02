import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { counterReducer } from './reducers/counter'
import { populationReducer } from './reducers/population'

const reducer = combineReducers({ counterReducer, populationReducer })

// browser devtools extension (Redux middleware)
const devtoolsExtensionCompose =
	typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

// preload state to reducers (must respect structure)
const preloadedState = {
	counterReducer: {
		value: 23,
	},
	populationReducer: {
		value: 456,
	},
}

const store = createStore(reducer, preloadedState, devtoolsExtensionCompose())

export default store
