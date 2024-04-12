import React, { useEffect, useState } from "react";

function PageTitle() {
  const [name, setName] = useState('');
 
  useEffect(() => {
    document.title = `Hi, ${name}`;
    console.log('i am executed :')
  },[]);
 
  return (
    <div>
      <p>Use the input field below to rename this page!</p>
      <input onChange={({target}) => setName(target.value)} value={name} type='text' />
    </div>
  );
}

function App() {
  return (
    <>
< PageTitle/>
    </>
  );
}

export default App;
