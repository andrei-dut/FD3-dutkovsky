import React from "react";
import ReactDOM from "react-dom";

import RainbowFrameHOC from "./components/RainbowFrameHOC";

let colors = ["red", "orange", "yellow", "green", "#00BFFF", "blue", "purple"];

ReactDOM.render(
  <RainbowFrameHOC colors={colors}>Hello!</RainbowFrameHOC>,
  document.getElementById("container")
);
