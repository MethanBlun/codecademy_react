// import React, { useEffect, useState } from "react";

// function Timer() {
//   const [time, setTime] = useState(0);
//   const [name, setName] = useState("");
//   const handlechange = ({ target }) => {
//     setName(target.value);
//   };

//   useEffect(() => {
//     let intervalId = setInterval(() => {
//       setTime((prev) => prev + 1), console.log("conmponent is mounted");
//     }, 1000);

//     return () => clearInterval(intervalId), console.log("component unmounted");
//   }, []);
// <p></p>
//   return (
//     <>  
//       <input type="text" onChange={handlechange} />
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

// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container mx-auto">
          <h1 className="text-2xl">Citations inspirantes</h1>
          {/* Ajoute ici ton système d'affichage de citations */}
        </div>
      </header>
      
      <main className="container mx-auto mt-8">
        <h2 className="text-2xl mb-4">Gestionnaire de tâches</h2>
        {/* Ajoute ici la liste de tâches */}
      </main>

      <footer>
        <div className="container mx-auto">
          <p>&copy; 2024 Gestionnaire de tâches</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
