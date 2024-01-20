import { useState } from "react";

const ControlledInput = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email);
  };

  //   const handleOnchange = (e) => {
  //     console.log(e.target.name);
  //     console.log(e.target.value);
  //   };

  return (
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
            setname(e.target.value);
          }}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          name="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};

export { ControlledInput };
