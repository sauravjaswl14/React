import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [person, setPerson] = React.useState(data);
  return (
    <div>
      {person.map((singlePerson) => {
        const { id, name } = singlePerson;
        return <h2 key={id}>{name}</h2>;
      })}
    </div>
  );
};

export default UseStateArray;
