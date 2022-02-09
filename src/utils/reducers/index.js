import counterReducer from './Counter'
import loggedReducer from './IsLogged'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default allReducers
