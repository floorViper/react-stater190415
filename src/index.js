import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// const Hot = hot(App);

//ReactDOM.render(<Hot />, document.querySelector("#root"));
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );

render(App);

if (module.hot) module.hot.accept("./components/App", () => render(App));
//Webpack Hot Module Replacement API 부분
