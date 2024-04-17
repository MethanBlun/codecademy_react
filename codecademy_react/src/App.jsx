import React, { useState } from "react";

// fetch(`https://pokeapi.co/api/v2/pokemon/${choosenPokemon}`)
// .then(resp => {
//   if (!resp.ok){
//     throw new Error('could not fetch ressources')
//   }
// })


// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(response => {
//         if(!response.ok){
            
//             throw new Error('could not fetch ressources')
//         }
//      return response.json()
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error))


function CheckPokemon() {
  const [choosenPokemon, setChoosenPokemon] = useState(""); 

  const CheckIfPekemon = ({ target }) => {
    const pokemon = target.value;
    setChoosenPokemon(pokemon);
    fetch(`https://pokeapi.co/api/v2/pokemon/${choosenPokemon}`)
.then(resp => {
  if (!resp.ok){
    throw new Error('could not fetch ressources')
  }
})

  };

  return (
    <div>
      <p>type your favorite pokemon</p>
      <input onChange={CheckIfPekemon}></input>
      <p>you choose : {choosenPokemon}</p> {/* Affichage de l'état */}
    </div>
  );
}

function App() {
  return (
    <>
      <CheckPokemon />
    </>
  );
}

export default App;


// // App.js
// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <div className="container mx-auto">
//           <h1 className="text-2xl">Citations inspirantes</h1>
//           {/* Ajoute ici ton système d'affichage de citations */}
//         </div>
//       </header>

//       <main className="container mx-auto mt-8">
//         <h2 className="text-2xl mb-4">Gestionnaire de tâches</h2>
//         {/* Ajoute ici la liste de tâches */}
//       </main>

//       <footer>
//         <div className="container mx-auto">
//           <p>&copy; 2024 Gestionnaire de tâches</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
