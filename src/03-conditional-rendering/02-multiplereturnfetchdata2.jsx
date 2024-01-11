import { useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";
function Multiple2fetch() {
  const [user, setUser] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [iserror, setIserror] = useState(false);

  useState(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIserror(true);
          setIsloading(false);
          return;
        }
        const data = await response.json();
        console.log(user);
        setUser(data);
      } catch (error) {
        setIserror(true);
        console.log(error);
      }
      setIsloading(false);
    };
    fetchData();
  }, []);

  if (isloading) {
    return <h2>Loading....</h2>;
  } else if (iserror) {
    return <h2>There was an error....</h2>;
  } else {
    return (
      <>
        <h2>User of Git</h2>
        <img src={user.avatar_url} alt="Username" />
        <h2>Name: {user.login}</h2>
      </>
    );
  }
}

export default Multiple2fetch;
