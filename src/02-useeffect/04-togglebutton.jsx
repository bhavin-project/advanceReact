import { useState, useEffect } from "react";

const ToggleEffect = () => {
  const [effect, setEffect] = useState(false);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setEffect(!effect);
        }}
      >
        toggle button
      </button>
      {effect && <RandomComp />}
    </>
  );
};

const RandomComp = () => {
  useEffect(() => {
    console.log("This is from effect");
  }, []);
  return <h1>Hello There</h1>;
};

export default ToggleEffect;
