import { useState } from "react";

export const Errorexample = () => {
  //   let val = 0;

  //   console.log(useState);
  //   console.log(useState());
  //   console.log(useState(0)[0]);
  //   console.log(useState(0)[1]);

  const [val, SetVal] = useState(0);
  const handleClick = () => {
    // val = val + 1;

    // console.log(val);

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
