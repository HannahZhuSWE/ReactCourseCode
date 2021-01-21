import React, { Component } from 'react';
import {connect} from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionType from '../store/actions';

const Persons = (props) => {

        return (
            <div>
                <AddPerson personAdded={props.onAddPerson} />
                {props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    
}

const mapStateToProps = state =>{
    return{
        persons : state.persons
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        onAddPerson: (name, age) => dispatch({type: actionType.ADD_PERSON, name:name, age:age}),
        onDeletePerson: (id) => dispatch({type: actionType.DELETE_PERSON, deleteId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);