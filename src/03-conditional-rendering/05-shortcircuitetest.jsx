import { useState } from "react";

const ShortcircuiteTest = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Dhiraj");
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({ name: "Nikunj" });

  return (
    <>
      {text || "Default value"}
      <section>{!text && "From Text"}</section>
      {user && <h2>{user.name}</h2>}
      {!text && (
        <>
          <h2>What ever</h2>
          <h1>{name}</h1>
          <p>from paragraph</p>
        </>
      )}
      {user && <Spincomponent username={user.name} />}
      <button className="btn" style={{ margin: "1rem 0" }}>
        {edit ? "Add" : "Edit"}
      </button>
      {user ? (
        <article>
          <h4>hello there: {name}</h4>
        </article>
      ) : (
        <div>Please Login </div>
      )}
    </>
  );
};

const Spincomponent = ({ username }) => {
  return <h2>From Spin: {username}</h2>;
};

export default ShortcircuiteTest;
