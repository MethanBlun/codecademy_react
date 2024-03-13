
import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import CryptoJS from 'crypto-js';





function QuoteMaker() {
  return (
    <blockquote>
      <p>
        The world is full of objects, more or less interesting; I do not wish to add any more.
      </p>
      <cite>
        <a target="_blank"
          href="https://en.wikipedia.org/wiki/Douglas_Huebler">
          Douglas Huebler
        </a>
      </cite>
    </blockquote>
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





