import React, { useState } from "react"



function App() {
   const [indexQuestion,setIndexquestion] = useState(0);

   const goBack = () => setIndexquestion(prevI => prevI -1)
  const goNext = () => setIndexquestion(prevI => prevI + 1)
  function MyDiv() {
    return <> <span>question#{indexQuestion}</span>
    <button  onClick={goBack}> go back</button>
    <button onClick={goNext}>next question</button>
    
    
    </>
    
  }


  
  return (
    <>
<MyDiv />
  
    </>
  );
}

export default App;
