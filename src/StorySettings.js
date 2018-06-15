import React from "react";

export default class StorySettings extends React.Component{
  constructor(){
    super();

    this.state={
      inputValue: ''
    }
  }

  inputHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render(){
    console.log(this.state.inputValue)
    return (
      <div className="StorySettings">
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <h3>Add a new Wizard</h3>
          </div>
          <input type="text" name="newWizard" value={this.state.inputValue} onChange={this.inputHandler} />
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
          <input name="selectedHouse" type="radio" value="All" onClick={this.props.changeHouse}/>All
          <input name="selectedHouse" type="radio" value="Gryffindor" onClick={this.props.changeHouse} />Gryffindor
          <input name="selectedHouse" type="radio" value="Slytherin" onClick={this.props.changeHouse} />Slytherin
          <input name="selectedHouse" type="radio" value="Hufflepuff" onClick={this.props.changeHouse} />Hufflepuff
          <input name="selectedHouse" type="radio" value="Ravenclaw" onClick={this.props.changeHouse} />Ravenclaw
        </form>
      </div>
    );
  }
};
