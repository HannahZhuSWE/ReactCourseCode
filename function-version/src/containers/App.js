import React, { Component, useState } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

const App = props => {
  const [personsState, setPersonsState] = useState(
     [
      {id: 'sdsfgh', name:"Max", age:28},
      {id: 'sddfgh', name:"Manu", age:29},
      {id: 'sdfgvh', name:"Annie", age:26}]
  );

  const [showPersons, setShowPersons] = useState(false);
  const [showCockpit, setCockpit] = useState(true);

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.findIndex(p=>{
        return p.id === id;
    });

    const person = {
      ...personsState[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState];
    persons[personIndex] = person;

    setPersonsState(
      persons
    );
  }
  
  const togglePersonsHandler = () =>{
    if(showPersons){
      setShowPersons(false);
    }
    else{
      setShowPersons(true);
    }
  }
  
  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState];
    persons.splice(personIndex, 1);
    setPersonsState(persons);
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;
  if(showPersons){
    persons = (
      <div>
        <Persons
          persons = {personsState}
          clicked= {deletePersonHandler}
          changed={nameChangedHandler}/>
    </div> 
  
    );
  }
    return (
      <div className="App">
        <button onClick={() => {setCockpit(false)}}>Remove Cockpit</button>
        {showCockpit? <Cockpit 
        clicked={togglePersonsHandler} 
        title={props.appTitle}
        /> : null}
        {persons}
      </div>
    );
  }


export default App;
