import React, { useEffect, useState } from "react";

function PageTitle() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Hi, ${name}`;
    console.log("i am executed :");
  });

  return (
    <div>
      <p>changer le title ici : </p>
      <input onChange={({target}) => setName(target.value)} type="text" />
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
