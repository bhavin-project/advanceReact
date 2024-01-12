divimport { useState } from "react";

const ToggleAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    if (showAlert) {
      return;
    }
  };

  return (
    <>
      <button className="btn" onClick={handleAlert}>
        Click Me!!
      </button>
    </>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};

export default ToggleAlert;
