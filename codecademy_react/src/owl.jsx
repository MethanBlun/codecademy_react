
import React from "react";
import Product from './App'

const owl = {
  
  title: "Excellent Owl",
  src: "https://content.codecademy.com/courses/React/react_photo-owl.jpg",
};


function ButtonSi() {
    function handleclick(){
      return alert('!! i was clicked')
    }
    return <button onClick={handleclick}> dont click here
    </button>
}
function buttonHandleClick(){
  alert('i was nddnndn')
}
function DisplayeSong(props){
  return(

  
  
  <>
  <h1>{props.singer}</h1>
  <h2>{props.singerName}</h2>
  <button onClick={buttonHandleClick}>{props.name}</button>
 </>
  )
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

      <DisplayeSong  singer='jack Stauber' singerName='fine life' name='did i work'/>
      </>
  );
}



export default Owl;
