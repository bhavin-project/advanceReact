import { useState } from "react";
import { data } from "../data";
const UsestateArray = () => {
  const [people, setPeople] = useState(data);
  const handleClick = (id) => {
    setPeople(people.filter((person) => id !== person.id));
  };

  return (
    <div>
      {people.map((person) => {
        return (
          <>
            <h2>{person.name}</h2>
            <button
              type="button"
              onClick={() => {
                handleClick(person.id);
              }}
              className="btn"
            >
              Remove
            </button>
          </>
        );
      })}
    </div>
  );
};

export default UsestateArray;
