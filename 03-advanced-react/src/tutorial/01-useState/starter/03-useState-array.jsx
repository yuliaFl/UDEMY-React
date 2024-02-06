import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const handleOneDelete = (id) => {
    const newPeople = people.filter((person)=> person.id !== id);
    setPeople(newPeople);
  };

  const handleDeleteAll = () => {
    setPeople([]);
  };
  return (
    <div>
      <h1>UseState Array Example</h1>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}> 
            <h4>{person.name}</h4>
            <button className="btn" onClick={()=>handleOneDelete(id)}> delete person</button>
            <h1></h1>
          </div>
        );
      })}
      <button className="btn" onClick={handleDeleteAll}>Clear all items </button>
    </div>
  );
};

export default UseStateArray;
