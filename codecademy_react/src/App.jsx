import React, { useState } from "react";


const arr = [1,2,3,4,5,6,7,8,9,0]





function App() {
  const [selected,setSelected] = useState([]);


  return (
    <>
     
      <p>{arr.map((chiffre) => chiffre.toString(2))}</p>

    </>
  );
}

export default App;
