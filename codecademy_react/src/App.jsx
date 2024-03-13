
import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import CryptoJS from 'crypto-js';



function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2></h2>
      <h3></h3>
    </div>       
  );
}


function QuoteMaker() {
  return (
    <>
  <Product  name="i works"/>

</>

  );
};




function App() {


  return (
    <> 
   
    <QuoteMaker/>

  
    </>
  )
}

export default App





