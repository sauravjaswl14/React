import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";
  return (
    <>
      {/* <h2>{firstValue}</h2>
      <h2>{secondValue}</h2> */}
      <h2>{text || "john doe"}</h2>
      {text && <h2>Hello world</h2>}
    </>
  );
};
export default ShortCircuitOverview;
