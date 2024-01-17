import React, { useState } from "react";

const LoginFunct = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Bhavin Joshi" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <section>
          <h4>Hello {user.name}</h4>
          <button type="button" className="btn" onClick={logout}>
            Logout
          </button>
        </section>
      ) : (
        <artical>
          <h4>Please Login</h4>
          <button type="button" className="btn" onClick={login}>
            Login
          </button>
        </artical>
      )}
    </>
  );
};

export default LoginFunct;
