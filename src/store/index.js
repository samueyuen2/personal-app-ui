import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const saga = createSagaMiddleware()

const store = createStore(
    //rootReducers, not supposed to change
    //Reducer config should be done in Reducer folder
    rootReducer,

    compose(
        //for saga
        applyMiddleware(saga),
        //for Chrome Redux Debug Extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

saga.run(rootSaga)

export default store