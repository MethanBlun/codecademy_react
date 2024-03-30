
import { createRoot } from "react-dom/client";

import React, { useState } from "react";





 
function App() {
  const [color , setColor] = useState()
  const buttonStyle = {
    backgroundColor: color,
    
  }

  return (

      
   
    <>

   <button style={buttonStyle} onClick={() => setColor('red')}>broken button</button>

    </>
  );
}

export default App;
