import { useEffect, useState } from "react";

const Useeffecteexample = () => {
  const [val, setVal] = useState(0);
  const handleClick = () => {
    console.log("hello form handle");
  };
  handleClick();
  useEffect(() => {
    console.log("hello from useeffect");
  }, []);

  return (
    <>
      <h2>{val}</h2>
      <button
        type="button"
        onClick={() => {
          setVal(val + 1);
        }}
        className="btn"
      >
        Click me!!
      </button>
    </>
  );
};

export default Useeffecteexample;
