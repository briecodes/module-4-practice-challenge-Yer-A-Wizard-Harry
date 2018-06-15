import React from "react";
import Wizard from "./Wizard";

const WizardList = props => {

  const students = props.students.map((student, index) => {
    return <Wizard key={index} name={student.name} house={student.house} />
  });

  const studentsFiltered = props.students.filter(student => {
    return student.house === props.currentHouse
  }).map((student, index) => {
    return <Wizard key={index} name={student.name} house={student.house} />
  });

  return <div className="WizardList">{ props.currentHouse === 'All' ? students : studentsFiltered }</div>;
};

export default WizardList;
