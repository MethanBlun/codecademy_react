
import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
// import CryptoJS from 'crypto-js';


import List from './list';


function App() {
  return (
    <div>
      <List type='Living Musician'>
        <li>Sachiko M</li>
        <li>Harvey Sid Fisher</li>
      </List>
      <List type='Living Cat Musician'>
        <li>Nora the Piano Cat</li>
        <li> from hell</li>
      </List>
    </div>
  );
}


export default App