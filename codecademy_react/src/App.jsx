import React, { useEffect, useState } from "react";

function PageTitle() {
  const [clickCount, setClickCount] = useState(0);

  // const increment = () => {
  //   setClickCount((prev) => prev - 0.01);
  // };
  useEffect(() => {
    alert('welcome to the brand new website , realise your dream , work everyday ')
    // document.addEventListener("keydown", increment);
    // alert(clickCount)
    // return document.removeEventListener("keydown", increment)
  },[]);

    

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
