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
      <section style={{ margin: "4rem 0" }}>
        <h2>complex counter</h2>
        <h3>{value}</h3>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value + 1)}
        >
          increase
        </button>
        <button type="button" className="btn" onClick={reset}>
          reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value - 1)}
        >
          decrease
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>More complex counter</h2>
        <h3>{value}</h3>
        <button type="button" className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateGotcha;
