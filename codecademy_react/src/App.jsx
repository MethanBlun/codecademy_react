import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return <button onClick={increment}>{count}</button>;
}

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
