import React from "react";
import ReactDOM from "react-dom";

import TodoApp from "./todos";

import "./styles.css";

function Main() {
  return <TodoApp />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
