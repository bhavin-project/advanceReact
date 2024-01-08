import { useEffect, useState } from "react";

const Multipleuseefect = () => {
  const [firstval, setFirstval] = useState(0);
  const [sectval, setsectval] = useState(0);

  //   const handleClick = () => {
  //     console.log("Hello there");
  //   };

  useEffect(() => {
    console.log("Hello from 1st");
  }, [firstval]);

  useEffect(() => {
    console.log("Hello from 2nd");
  }, [sectval]);

  return (
    <>
      <h2>{firstval}</h2>
      <button
        className="btn"
        onClick={() => {
          setFirstval(firstval + 1);
        }}
      >
        Click me first
      </button>
      <h2>{sectval}</h2>
      <button
        className="btn"
        onClick={() => {
          setsectval(sectval + 1);
        }}
      >
        Click me second
      </button>
    </>
  );
};

export default Multipleuseefect;
