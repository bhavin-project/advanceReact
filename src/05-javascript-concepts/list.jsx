import { people } from "../data";

const PeopleData = () => {
  return (
    <section>
      {people.map((person) => {
        const { name, nickName, id } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h2>{id}</h2>
            <h3>{nickName}</h3>
          </div>
        );
      })}
    </section>
  );
};
export default PeopleData;
