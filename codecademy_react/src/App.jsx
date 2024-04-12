import React, { useEffect, useState } from "react";

function PageTitle() {
  const [clickCount, setClickCount] = useState(0);

  const increment = () => {
    setClickCount((prev) => prev + 1);
  };
  useEffect(() => {
    document.addEventListener("keydown", increment);

  });

  return (
    <div>
      <h1>Document Clicks: {clickCount}</h1>
    </div>
  );
}

function App() {
  return (
    <>
      <PageTitle />
    </>
  );
}

export default App;
