import { CounterState, CounterActions } from "./types";
import { Action } from "redux";
declare const count: (state: CounterState | undefined, action: Action | CounterActions) => CounterState;
export default count;
