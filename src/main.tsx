import React from "react";
import ReactDOM from "react-dom";
import "virtual:svg-icons-register";
import "./index.less";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root"),
);
