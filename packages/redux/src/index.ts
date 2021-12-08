import { combineReducers, createStore } from "redux";

import count from "./counter/reducers";
import { CounterState } from "./counter/types";

const reducer = combineReducers({
    count
});

export interface State {
    count: CounterState;
}


const configureStore = (initialState?: State) =>
    createStore(
        reducer,
        initialState
    );

const store = configureStore();

export * from "./counter/index";
export default store;