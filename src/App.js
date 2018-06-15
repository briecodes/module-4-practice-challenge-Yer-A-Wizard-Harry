import React, { Component } from "react";

import StorySettings from "./StorySettings";
import WizardList from "./WizardList";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state={
      wizards: [],
      currentHouse: 'All'
    }
  }

  componentDidMount(){
    fetch("http://hp-api.herokuapp.com/api/characters/students")
    .then(response => response.json())
    .then(res => this.setState({
      wizards: res
    }))
  }

  changeHouse = (event) => {   
    const currentHouse = event.target.value
    this.setState({
      currentHouse
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newWizard = event.target.newWizard.value
    const newHouse = event.target.newWizardHouse.value
    const newWizardObject = {name: newWizard, house: newHouse}

    this.setState({
      wizards: [...this.state.wizards, newWizardObject]
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Harry Potter Fan Fiction Story Creator</h2>
        <StorySettings changeHouse={this.changeHouse} handleSubmit={this.handleSubmit}/>
        <WizardList wizards={this.state.wizards} house={this.state.currentHouse}/>
      </div>
    );
  }
}

export default App;
