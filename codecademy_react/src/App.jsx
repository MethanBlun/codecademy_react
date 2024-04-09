import React, { useEffect, useState } from "react";



function AlertExample() {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 5000); // Le composant restera monté pendant 5 secondes

    return () => {
      clearTimeout(timeout);
      alert('Le composant sera démonté !');
    };
  }, []);

  return (
    <div>
      {showAlert && <h1>Le composant est monté !</h1>}
      {!showAlert && <h1>Le composant est démonté !</h1>}
    </div>
  );
}




function App() {
  

  return (
    <>
<AlertExample/>
    </>
  );
}

export default App;
