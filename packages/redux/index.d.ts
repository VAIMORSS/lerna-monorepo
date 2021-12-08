import { CounterState } from "./counter/types";
export interface State {
    count: CounterState;
}
declare const store: import("redux").Store<import("redux").CombinedState<{
    count: CounterState;
}>, import("redux").AnyAction>;
export * from "./counter/index";
export default store;
