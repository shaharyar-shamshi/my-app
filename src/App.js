import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    Persons: [
      {
        id: "fhgrt1",
        name: "shaharyar",
        age: "22"
      },
      {
        id: "lkhti5",
        name: "shamshi",
        age: "23"
      }
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      Persons: [
        {
          name: newName,
          age: "22"
        },
        {
          name: "shamshi",
          age: "23"
        }
      ]});
  
  }

  onchangeHandler = (event,id) => {
    const person = [...this.state.Persons];
    const personIndex = this.state.Persons.findIndex(p =>{
      return p.id === id;
    })
    person[personIndex].name = event.target.value;
    this.setState({
      Persons: person
    })
  }

  togglePersonsHandler = () => {
    if(this.state.showPerson) {
      this.setState({
        showPerson: false
      })
    } else {
      this.setState({
        showPerson: true
      })
    }
  }

  deletenamehandler = (index) => {
     const persons = this.state.Persons;
     this.state.Persons.splice(index,1);
     this.setState({Persons: persons});
  }
  render() {
    const style = {
      width:'200px',
      backgroundColor: 'green'
    };
    let person = null;
    if(this.state.showPerson) {
      person = (<div>
        {this.state.Persons.map((person,index) => 
          {
            return <Person 
            name = {person.name}
            age = {person.age}
            method = {(event) => this.onchangeHandler(event,person.id)} 
            delete = {() => this.deletenamehandler(index)} />
          })}
      </div>);
      style.backgroundColor = 'red'
        }
        const classes = ['red', 'bold'].join(' ');
    return (
      <div className="App">
       <h1 className = {classes}> I am shaharyar shamshi new to react </h1>
       <button style = {style} onClick= {this.togglePersonsHandler}> Switch Name</button>
       {person}
      </div>
    );
  }
}

export default App;
