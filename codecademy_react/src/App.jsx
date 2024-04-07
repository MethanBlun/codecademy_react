import React, { useEffect, useState } from "react";








function App() {
  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");
  useEffect(()=>{},[])

  return (
    <>
      <div>
        <input 
        type="text" 
        value={title} 
        onChange={setTitle} 
        />

<input 
        type="text" 
        value={firstname} 
        onChange={setFirstname} 
        />

      </div>
    </>
  );
}

export default App;
