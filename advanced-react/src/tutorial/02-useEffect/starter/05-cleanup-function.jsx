import React, { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("call useeffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });

  console.log("render");
  return (
    <>
      <h2>window</h2>
      <h3>size: {size}PX</h3>
    </>
  );
};

export default CleanupFunction;
