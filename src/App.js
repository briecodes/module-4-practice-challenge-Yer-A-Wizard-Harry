import React, { Component } from "react";

import StorySettings from "./StorySettings";
import WizardList from "./WizardList";
import "./App.css";

class App extends Component {

  state = {
    students: [],
    currentHouse: 'All'
  };

  componentDidMount() {
    this.fetchStudents();
  };

  fetchStudents = () => {
    fetch('http://hp-api.herokuapp.com/api/characters/students')
      .then(response => response.json())
      .then(students => {
        this.setState({
          students
        });
      });
  };

  newStudentSubmit = (e) => {
    e.preventDefault();
    const newStudent = {name: e.target.newWizard.value, house: e.target.newWizardHouse.value}
    this.setState({
      students: [...this.state.students, newStudent]
    });
  };

  changeHouse = (e) => {
    this.setState({
      currentHouse: e.target.value
    });
  };

  render() {
    console.log("render state:", this.state);
    return (
      <div className="App">
        <h2>Harry Potter Fan Fiction Story Creator</h2>
        <StorySettings onClickHandler={this.changeHouse} handleSubmit={this.newStudentSubmit} />
        <WizardList students={this.state.students} />
      </div>
    );
  }
}

export default App;
