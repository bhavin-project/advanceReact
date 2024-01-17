import { useState } from "react";

const ToggleAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    if (showAlert) {
      setShowAlert(false);
      return;
    }
    setShowAlert(true);
  };

  return (
    <>
      <button className="btn" onClick={handleAlert}>
        Click Me!!
      </button>
      {showAlert && <Alert />}
    </>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};

export default ToggleAlert;
