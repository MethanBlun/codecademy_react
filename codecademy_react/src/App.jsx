import React, { createElement } from "react";
import { createRoot } from "react-dom/client";
import Student from "./student";
import GroceryItem from "./student";
// import CryptoJS from 'crypto-js';

function App() {
  const handleClick = () => {
    alert('yen a plus')
  }
  return (
   <GroceryItem name='kk' onClick={handleClick} />
  );
}

export default App;
