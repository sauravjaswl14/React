import { useState } from "react";
const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        click
      </button>
    </div>
  );
};

export default UseStateBasics;
