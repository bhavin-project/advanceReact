import { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";
function MultiplefetchData() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Hello There</h1>
    </>
  );
}

export default MultiplefetchData;
