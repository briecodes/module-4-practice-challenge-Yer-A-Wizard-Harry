import React from "react";
import Wizard from "./Wizard";

const WizardList = props => {
    const students = props.students.map(student => {
    const name = student.name;
    <Wizard {name} />
  });
  return <div className="WizardList">{students}</div>;
};

export default WizardList;
