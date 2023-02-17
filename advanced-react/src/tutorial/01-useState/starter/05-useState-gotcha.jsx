import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className="btn" type="button" onClick={() => setValue(value - 1)}>
        decrease
      </button>
      <button className="btn" type="button" onClick={reset}>
        reset
      </button>
      <button className="btn" type="button" onClick={() => setValue(value + 1)}>
        increase
      </button>
      <h2>Complex counter</h2>
      <h1>{value}</h1>
      <button className="btn" type="button" onClick={complexIncrease}>
        increase
      </button>
    </>
  );
};

export default UseStateGotcha;
