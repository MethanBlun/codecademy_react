import React, { createElement } from "react";
import { createRoot } from "react-dom/client";
import Student from "./student";
// import CryptoJS from 'crypto-js';

function App() {
  return <Student age={18} name="moustapha" isStudentRich={true} />;
}

export default App;
