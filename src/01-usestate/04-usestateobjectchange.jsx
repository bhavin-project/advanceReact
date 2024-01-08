import { useState } from "react";

const Objectchange = () => {
  const [person, setPerson] = useState({
    name: "Vivan",
    age: 23,
    city: "Ahmedabad",
  });
  //   const [name, setName] = useState("Nirav");
  //   const [age, setAge] = useState(23);
  //   const [city, setCity] = useState("Ahemdabad");

  const displayPerson = () => {
    setPerson({ name: "Mohit" });
    // setName("Ayush");
    // setAge(21);
    // setCity("Bharuch");
  };

  return (
    <>
      {/* <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{city}</h2> */}
      <h2>{person}</h2>
      <h2>{person.age}</h2>
      <h2>{person.city}</h2>
      <button onClick={displayPerson} className="btn">
        changeData
      </button>
    </>
  );
};
export default Objectchange;
