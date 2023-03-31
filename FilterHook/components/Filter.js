import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Filter.css"

const Filter = ({ stringList }) => {
console.log(stringList)
  const [localState, setLocalState] = useState({
    inputValue: "",
    checkboxValue: false,
    stringList,
  });

  const handlerTools = (key) =>  (e) => {
    let target = e.target;
    switch (key) {
      case "checkbox":
        setLocalState(state => ({...state, checkboxValue: target.checked}));
        break;
      case "text":
        setLocalState(state => ({...state, inputValue: target.value}));
        break;
      case "reset":
        setLocalState({
          inputValue: "",
          checkboxValue: false,
          stringList,
        })
        break;
    
      default:
        break;
    }
  }


  let stringListDOM = localState.stringList.map((elem) => (
    <div className="list__string" key={elem}>
      {elem}
    </div>
  ));

  return (
    <div className="Filter">
      <div className="Filter-tools">
        <input type="checkbox" checked onChange={handlerTools("checkbox")} />
        <input
          className="tools__text"
          type="text"
          checked
          onChange={handlerTools("text")}
        />
        <button onClick={handlerTools("reset")}>Сброс</button>
      </div>
      <div className="Filter-list">{stringListDOM}</div>
    </div>
  );
};

export default Filter;
