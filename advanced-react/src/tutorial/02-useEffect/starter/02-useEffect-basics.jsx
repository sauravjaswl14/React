import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEfect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("Hello world");
  }, []);

  console.log("render component");
  return (
    <React.Fragment>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        click
      </button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
