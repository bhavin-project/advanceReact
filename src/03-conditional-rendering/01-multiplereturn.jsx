import { useState, useEffect } from "react";

function Morereturns() {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>Hello There</h1>
      </>
    );
  }

  return <h2>My App</h2>;
}

export { Morereturns };
