import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "Random Message",
  });
  const updatePerson = () => {
    setPerson({ ...person, message: "Hello Wrold" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type="button" className="btn" onClick={updatePerson}>
        update message
      </button>
    </>
  );
};

export default UseStateObject;
