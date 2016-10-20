import * as React from "react";
import { Provider } from "react-redux";

declare var module: any;
import { combineReducers, createStore, applyMiddleware } from "redux";

import Reducers from "../reducers";

const middlewares = applyMiddleware();

function configureStore(initialState?: App.State) {
    const store = createStore(combineReducers(Reducers), initialState || {}, middlewares);
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("./reducers", () => {
            store.replaceReducer(combineReducers(Reducers));
        });
    }
    return store;
}

export default (props: any) => {
    return (
        <Provider
            store={configureStore()}>
            {props.children}
        </Provider>
    );
};