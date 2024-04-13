import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(()=>{setTime((prev)=> prev + 1)},2000)
  },[]);

  //  const intervalId = setInterval(() => {setTime ((prev)=> prev + 1);})
  // function intervalId(){
  //   setInterval(()=>{setTime((prev) => prev + 1)})
  // }
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
