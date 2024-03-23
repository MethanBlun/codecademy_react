import React, { createElement } from "react";
import { createRoot } from "react-dom/client";
import Student from "./student";
// import CryptoJS from 'crypto-js';

function App() {
  return (<>
 
  <Student age={13} name="moustapha" isStudentRich={true} />
  <Student age={27}  isStudentRich={true} />
   </>
  )
}

export default App;
