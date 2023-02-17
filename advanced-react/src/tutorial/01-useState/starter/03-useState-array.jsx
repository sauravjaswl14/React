import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const handleClick = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h3>{name}</h3>
            <button
              type="button"
              className="rm-btn"
              onClick={() => handleClick(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        clear
      </button>
    </>
  );
};

export default UseStateArray;
