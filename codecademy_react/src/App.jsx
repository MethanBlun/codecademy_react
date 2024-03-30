import React, { createElement, useState } from "react";
import { createRoot } from "react-dom/client";


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
    {fruits.map((fruit) => <li>{}</li> )}
    </>
  );
}

export default App;
