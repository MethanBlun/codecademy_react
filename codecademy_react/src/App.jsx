
import React from 'react';
import { createRoot } from 'react-dom/client';

const bigDiv = <div className='bigDiv'>I AM A BIG ONE</div>
const theBestString = 'This text was accessed through a javascript variable';
let drinkingAge = 100
let age = 10
const headline = (
    <h1>

      { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
    </h1>
  );
function App() {


  return (
    <>

    {bigDiv}
    <h1>{theBestString}</h1>
    {headline}

    </>
  )
}

export default App




// const container = document.getElementById('container');
// const root = createRoot(container);
// root.render(<h1>Hello world</h1>);

