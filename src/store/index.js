import { createStore } from 'redux'
import rootReducer from '../reducers'

const store = createStore(
    //rootReducers, not supposed to change
    //Reducer config should be done in Reducer folder
    rootReducer,

    //for Chrome Redux Debug Extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store