import React from "react";

export const withRainbowFrame = colors => Comp => (props) => {
  let children = <Comp {...props}/>
  let frame = colors.reduce(
    (prev, current) => (
      <div style={{ border: `8px solid ${current}` }} className="border">
        {prev}
      </div>
    ),
    <div className="content">{children}</div>);

    return (<div>{frame}</div>)
}