import React, { useState, useEffect } from "react";

const ToggleChallenge = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  return (
    <>
      <h2>{text || "John Doe"}</h2>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h2>Error...</h2>}
      {isError ? (
        <p>there is an error</p>
      ) : (
        <div>
          <p>there is no error</p>
        </div>
      )}
    </>
  );
};

export default ToggleChallenge;
