
import React from "react";



function Article(props){
    console.log(props)
    return (<>
  
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
        {props.children}
     </> )
};



export default Article;