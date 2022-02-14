import React from "react";
import thunk from "redux-thunk";
import Counter from "./Counter";
import rootReducer from "./rootReducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import "./index.css";

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  console.log("reducer", state, action);

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));
// const store = createStore(rootReducer);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
