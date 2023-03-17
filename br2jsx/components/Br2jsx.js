import React from "react";
import PropTypes from "prop-types";
import "./Br2jsx.css";

class Br2jsx extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }; 

  render() {
    let lines = this.props.text.split(/<br *?\/?>/);
    return (
      <div className="Br2jsx">
        {lines.reduce((prev, current, i) => {
      let newLines = [...prev];
      if(i) newLines.push(<br key={i}/>);
      newLines.push(current);
        return newLines;
    }, [])}
      </div>
    );
  }
}

export default Br2jsx;
