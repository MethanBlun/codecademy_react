// import React, { useEffect, useState } from "react";

// function Timer() {
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     let intervalId = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []); // tableau de dépendances vide pour s'assurer que useEffect ne se déclenche qu'une seule fois

//   return (
//     <>
//       <h1>Time: {time}</h1>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Timer />
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    console.log(time);
    return () => clearInterval(intervalId);
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
