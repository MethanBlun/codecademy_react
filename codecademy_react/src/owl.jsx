
import React from "react";


const owl = {
  
  title: "Excellent Owl",
  src: "https://content.codecademy.com/courses/React/react_photo-owl.jpg",
};


function ButtonSi() {
    function handleclick(){
      return alert('fuck !! i was clicked')
    }
    return <button onClick={handleclick}> dont click here
    </button>
}

const ibreuMonkey = {src:"https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg"  }
function Owl() {
  return (
    <>
  
    <div>
      <h1>{owl.title}</h1>
      <img 
      className="theOwl"
      src = {owl.src}

      alt = {owl.title} 
      />
    </div>
    <ButtonSi/>
    <img className="ibreuMonkey" src={ibreuMonkey.src} alt="" />


      </>
  );
}



export default Owl;
