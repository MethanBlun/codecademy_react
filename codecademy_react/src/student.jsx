import React from "react";

// const Student = (props) => {
//   <h1>{props.name}</h1>
// }
function Student(props) {
  return (
    <>
      <h3> the studuent is :{props.name}</h3>
      <h3> his age is : {props.age}</h3>
      <h3> is this student a lazy : {props.isStudentRich ?  'yes' : 'no'}</h3>
    </>
  );
}

export default Student;
