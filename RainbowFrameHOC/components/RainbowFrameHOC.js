import React from "react";
import PropTypes from "prop-types";
import "./RainbowFrameHOC.css";
import DoubleButton from "./DoubleButton";
import { withRainbowFrame } from "./withRainbowFrame";

class RainbowFrameHOC extends React.Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
  };

  cbPressed = (num) => () => {alert(num)};

  render() {
    let FrameDoubleButton = withRainbowFrame(this.props.colors)(DoubleButton);

    return (
      <div className="RainbowFrameHOC">
        <DoubleButton
          caption1={"однажды"}
          caption2={"пору"}
          cbPressed={this.cbPressed}
        >
          {" "}
          в студеную зимнюю{" "}
        </DoubleButton>
        <FrameDoubleButton
          caption1={"я из лесу"}
          caption2={"мороз"}
          cbPressed={this.cbPressed}
        >
          {" "}
          вышел, был сильный{" "}
        </FrameDoubleButton>
      </div>
    );
  }
}

export default RainbowFrameHOC;
