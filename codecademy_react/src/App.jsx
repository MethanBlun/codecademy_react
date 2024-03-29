import React, { createElement, useState } from "react";
import { createRoot } from "react-dom/client";

// import CryptoJS from 'crypto-js';

//afficher une liste de fruit avec map

// const [compteur, setCompteur] = useState(1);

const fruits = [
  { id: 1, nom: "dakkar" },
  { id: 2, nom: "mango" },
  { id: 3, nom: "xaal" },
  { id: 4, nom: "maad" },
];

function App() {
  return (
    <>
      <div>
        <ul>{fruits.map((fruit) => {
          return <li>{fruit.nom}</li>
        })}</ul>
      </div>
    </>
  );
}

export default App;
