import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h2>{name}</h2>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
