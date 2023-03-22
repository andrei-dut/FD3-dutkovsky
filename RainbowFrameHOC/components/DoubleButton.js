import React from "react";
import PropTypes from "prop-types";
import "./RainbowFrameHOC.css";

class DoubleButton extends React.Component {
  static propTypes = {
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
    cbPressed: PropTypes.func,
  };

  render() {
    return (
      <div className="DoubleButton">
        <input
          type="button"
          value={this.props.caption1}
          onClick={this.props.cbPressed(1)}
        />
        {this.props.children}
        <input
          type="button"
          value={this.props.caption2}
          onClick={this.props.cbPressed(2)}
        />
      </div>
    );
  }
}

export default DoubleButton;
