import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime((prev) => prev + 1), console.log("conmponent is mounted");
    }, 1000);

    return () => clearInterval(intervalId), console.log("component unmounted");
  }, []);

  return (
    <>
      <h1>Time: {time}</h1>
    </>
  );
}

function App() {
  return (
    <>
      <Timer />
    </>
  );
}

export default App;
