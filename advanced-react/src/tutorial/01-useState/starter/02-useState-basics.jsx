import { useState } from "react";
const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>useState example</h2>
      <h3>{count}</h3>
      <button type="button" onClick={handleClick}>
        click
      </button>
    </div>
  );
};

export default UseStateBasics;
