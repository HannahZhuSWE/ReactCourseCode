import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/Auth-context';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    //could use this.state = something here
  }

  state = {
    persons: [
      { id: 'sdfgh', name: 'Max', age: 28 },
      { id: 'sdfghd', name: 'Manu', age: 29 },
      { id: 'sdfgsh', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js getDerivedStateFromProps', props);
    //update state here
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount...');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate...');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[App.js] componentDidUpdate...');
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons, changeCounter: this.setState.changeCounter+1});
     
  }

  togglePersonsHandler= () =>{
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {showPersons: !doesShow,
              changeCounter: prevState.changeCounter +1
      };
    });
  }

  loginHandler = () =>{
    this.setState({authenticated: true});
  }
  render() {
    console.log('[App.js render');
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
              <Persons 
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>              
      );
      style.backgroundColor= 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
            <Cockpit 
              paragraphStyle={classes.join(' ')}
              buttonStyle={style}
              title={this.props.appTitle}
              showPersons={this.state.showPersons} 
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}/>
            {persons}  
          </AuthContext.Provider>
          
        </div>
      </StyleRoot>
      
    ); }
}

export default Radium(App);
