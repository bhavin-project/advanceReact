import { useState } from "react";

const Multiplesetval = () => {
  const [val, setVal] = useState(0);
  const handleClick = () => {
    // setTimeout(() => {
    //   setVal((val) => val + 1);
    // }, 3000);
    console.log("hello");
    // setVal((currentState) => {
    //   return currentState + 1;
    // });
    setVal(val + 1);
    // console.log(val);
    // setVal((val) => {
    //   return val + 1;
    // });
  };
  //It is executing unnecessarily and creating the infinite loop
  //   handleClick();
  return (
    <>
      <h2>{val}</h2>
      <button type="button" onClick={handleClick} className="btn">
        Click Me!!
      </button>
    </>
  );
};

export default Multiplesetval;
