import React, { createElement } from "react";
import { createRoot } from "react-dom/client";

// import CryptoJS from 'crypto-js';




   const myArray = [1,2,3,4,5,6,7,8]

const doubleNumeber = myArray.map(n => n*2)

function App() {
  

  return (
    <>


  {myArray}
  <hr />
  {doubleNumeber}
    </>
  )
}

export default App;
