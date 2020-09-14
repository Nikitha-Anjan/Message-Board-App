
import { createStore, combineReducers,applyMiddleware } from 'redux'
import messagesReducer from '../reducers/messagesReducer'
import thunk from 'redux-thunk'


const rootReducer ={
    messages: messagesReducer,
}
const configureStore = () => {
    const store = createStore(combineReducers(rootReducer),applyMiddleware(thunk))
    return store 
}

export default configureStore