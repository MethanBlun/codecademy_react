
import React from 'react';
import { createRoot } from 'react-dom/client';
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person,i) =>

  <li key={ + i}>{person} {person + i} </li>,

);


function App() {


  return (
    <> 
   
    <ul>{peopleList}</ul>
    </>
  )
}

export default App





