import { useState } from "react";

export const Errorexample = () => {
  const [val, SetVal] = useState(0);
  const handleClick = () => {
    SetVal(val + 1);
  };

  return (
    <>
      <h2>{val}</h2>
      <button type="button" onClick={handleClick} id="clickBtn" className="btn">
        Click Me
      </button>
    </>
  );
};

export default Errorexample;
