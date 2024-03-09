
import React from 'react';
import { createRoot } from 'react-dom/client';
import CryptoJS from 'crypto-js';








const people = ['Rowe', 'Prevost', 'Gare'];
// const CryptoJS = require("crypto-js");

const peopleList = people.map(function(person,index){


const key = CryptoJS.SHA1(person ).toString();
return <li key={key}>{person}{key}</li>
})


function App() {


  return (
    <> 
   
    <ul>{peopleList}</ul>
  
    </>
  )
}

export default App





