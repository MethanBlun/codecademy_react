
import React from 'react';
import { createRoot } from 'react-dom/client';
const judgmental = Math.random() < 0.5;
const favoriteFoods = (
    <div>
      <h1>My Favorite Foods</h1>
      <ul>
        <li>Sushi Burrito</li>
        <li>Rhubarb Pie</li>
        { !judgmental &&
      <li>Nacho Cheez Straight Out The Jar</li>
        }
        <li>Broiled Grapefruit</li>
      </ul>
    </div>
  );

function App() {


  return (
    <>

   {favoriteFoods}

    </>
  )
}

export default App




// const container = document.getElementById('container');
// const root = createRoot(container);
// root.render(<h1>Hello world</h1>);

