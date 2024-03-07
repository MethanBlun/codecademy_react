
import React from 'react';
import { createRoot } from 'react-dom/client';
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person,i) =>

  <li>{person}</li>

);


function App() {


  return (
    <>
    llll
    <ul>{peopleList}</ul>
    </>
  )
}

export default App





