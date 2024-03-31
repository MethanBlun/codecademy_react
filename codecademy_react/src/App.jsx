import React, { useState } from "react"



function App() {

 const  myArray = [1,2,3,4,5,6,7]
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
  {alert(myArray.includes(2))}
    </>
  );
}

export default App;
