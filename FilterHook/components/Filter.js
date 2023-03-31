import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Filter.css";

const Filter = (props) => {
  const [controls, setControls] = useState({
    filter: "",
    sort: false,
  });
  const [wordsList, setWordsList] = useState([]);

  const handlerControls = (key) => (e) => {
    let target = e.target;
    switch (key) {
      case "sort":
        setControls((state) => ({ ...state, sort: target.checked }));
        break;
      case "filter":
       
        setControls((state) => ({ ...state, filter: target.value }));
        break;
      case "reset":
        setControls({
          filter: "",
          sort: false,
          wordsList,
        });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    let newWordsList = [...props.wordsList];
    if (controls.sort) newWordsList.sort();
    if (controls.filter)
      newWordsList = newWordsList.filter((word) => word.includes(controls.filter));

      setWordsList(newWordsList);
  }, [controls.sort, controls.filter]);

  let stringListDOM = wordsList.map((elem) => (
    <div className="list__string" key={elem}>
      {elem}
    </div>
  ));

  return (
    <div className="Filter">
      <div className="Filter-tools">
        <input
          type="checkbox"
          checked={controls.sort}
          onChange={handlerControls("sort")}
        />
        <input
          className="tools__text"
          type="text"
          value={controls.filter}
          onChange={handlerControls("filter")}
        />
        <button onClick={handlerControls("reset")}>Сброс</button>
      </div>
      <div className="Filter-list">{stringListDOM}</div>
    </div>
  );
};

export default Filter;
