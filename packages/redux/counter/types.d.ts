import { Action } from "redux";
export interface CounterState {
    count: number;
}
export declare enum CounterActionType {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT"
}
export interface IncrementAction extends Action {
    type: CounterActionType.INCREMENT;
}
export interface DecrementAction extends Action {
    type: CounterActionType.DECREMENT;
}
export declare type CounterActions = IncrementAction | DecrementAction;
