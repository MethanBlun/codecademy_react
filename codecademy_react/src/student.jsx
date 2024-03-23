import React from "react";
import PropTypes from 'prop-types'


function Student(props) {
  return (
    <>
      <h3> the studuent is :{props.name}</h3>
      <h3> his age is : {props.age}</h3>
      <h3> is this student a lazy : {props.isStudentRich ?  'yes' : 'no'}</h3>
    </>
  );
}

Student.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
  isStudentRich : PropTypes.bool,
}

export default Student;
