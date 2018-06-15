import React from "react";
import Wizard from "./Wizard";

const WizardList = props => {
  const relevantWizards = props.wizards.map((wizard, index) => {
    return <Wizard name={wizard.name} house={wizard.house} key={index} />
  })

  const filteredWizards = relevantWizards.filter(wizard => {
    return wizard.props.house === props.house
  })

  return(
    <div className="WizardList">
    {props.house === "All" ? relevantWizards : filteredWizards}
    </div>
  )
};

export default WizardList;
