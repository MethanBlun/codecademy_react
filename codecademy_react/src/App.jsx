import React, { useEffect, useState } from "react";

function Testfunction() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "New Title";
    return () => {
      document.title = "Previous Title";
    };
  }, [count]);

  return (
    <div >
      <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
    </div>
  
  );
}

function App() {
  return (
    <>
      <Testfunction />
    </>
  );
}

export default App;
