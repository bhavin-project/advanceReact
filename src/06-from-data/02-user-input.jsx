import { useState } from "react";
import { data } from "../data";
const UserInputData = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fid = Date.now();
    console.log(fid);
    const newData = { id: Date.now(), name: name };
    const newArray = [...people, newData];
    setPeople(newArray);
  };
  const handleclick = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <h4>controlled inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h2>Users</h2>
      {people.map((person) => {
        return (
          <article key={person.id}>
            <h4>{person.name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => handleclick(person.id)}
            >
              remove
            </button>
          </article>
        );
      })}
    </section>
  );
};

export { UserInputData };
