import React from "react";
import PropTypes from "prop-types";
import "./Br2jsx.css";

class Br2jsx extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }; 

  render() {
    let lines = this.props.text.replace(/<br *?\/?>/g, " <br/> ").split(" ")
    return (
      <div className="Br2jsx">
        {lines.map((line, i) => line === "<br/>" ? <br key={i}/> : line)}
      </div>
    );
  }
}

export default Br2jsx;
