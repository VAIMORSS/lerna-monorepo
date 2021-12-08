import "./App.css";
import { test } from "@poc/api";
import { Provider } from "react-redux";
import store from "@poc/redux";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>{test}</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
