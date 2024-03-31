import React, { useState } from "react"


const  myArray = [1,2,3,4,5,6,7]
const mySecArray = [ 'e','foru']
const testArrray = [...myArray]
const filteredArrays = myArray.filter((array) => array >= 3);
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
  {alert(filteredArrays)}
    </>
  );
}

export default App;
