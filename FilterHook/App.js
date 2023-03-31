import React from "react";
import ReactDOM from "react-dom";

import Filter from "./components/Filter";

let stringList = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

ReactDOM.render(
  <Filter stringList={stringList}/>,
  document.getElementById("container")
);
