import React from "react";
import PropTypes from "prop-types";
import "./RainbowFrame.css";

class RainbowFrame extends React.Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
  }; 

  render() {

    let frame = this.props.colors.reduce((prev, current) =>  <div style={{border: `8px solid ${current}`}}>{prev}</div> , <p>{this.props.children}</p> )

    return (
      <div className="RainbowFrame">
        {frame}
      </div>
    );
  }
}

export default RainbowFrame;
