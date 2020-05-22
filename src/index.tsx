import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "./store";
const store = configureStore();

/**
 * start render dom
 * * render the app file and send store as props
 */
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
