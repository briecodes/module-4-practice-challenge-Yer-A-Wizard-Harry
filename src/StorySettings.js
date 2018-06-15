import React from "react";

const StorySettings = props => {
  //Most of the form is here, but you still need to hook them up to state
  return (
    <div className="StorySettings">
      <form onSubmit={props.handleSubmit}>
        <div>
          <h3>Add a new Wizard</h3>
        </div>
        <input type="text" name="newWizard" />
        <select name="newWizardHouse">
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
        <input type="submit" />
      </form>
      <form>
        <div>
          <h3>Filter By House</h3>
        </div>
        <input name="selectedHouse" type="radio" value="All" onClick={props.onClickHandler} />All
        <input name="selectedHouse" type="radio" value="Gryffindor" onClick={props.onClickHandler} />Gryffindor
        <input name="selectedHouse" type="radio" value="Slytherin" onClick={props.onClickHandler} />Slytherin
        <input name="selectedHouse" type="radio" value="Hufflepuff" onClick={props.onClickHandler} />Hufflepuff
        <input name="selectedHouse" type="radio" value="Ravenclaw" onClick={props.onClickHandler} />Ravenclaw
      </form>
    </div>
  );
};

export default StorySettings;
