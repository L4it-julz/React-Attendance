import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import employeeReducer from "./ducks/employees"

import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    employee: employeeReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, 
    {}, composeEnhancers(
    applyMiddleware(...middleware))
    );

sagaMiddleware.run(watcherSaga);

export default store;