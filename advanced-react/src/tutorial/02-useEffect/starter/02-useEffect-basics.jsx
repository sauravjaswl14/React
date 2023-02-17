import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call from useEffect");
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
  }, [value]); //runs everytime the value changes

  useEffect(() => {
    console.log("Hello world");
  }, []); //runs only in initial rendering

  return (
    <>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        click
      </button>
    </>
  );
};

export default UseEffectBasics;
