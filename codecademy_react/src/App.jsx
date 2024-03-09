
import React from 'react';
import { createRoot } from 'react-dom/client';
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map(function(Person,id){
  return <li key={id}>{Person}{id}</li>
})

function App() {


  return (
    <> 
   
    <ul>{peopleList}</ul>
    <p>{peopleList.key}</p>
    </>
  )
}

export default App





