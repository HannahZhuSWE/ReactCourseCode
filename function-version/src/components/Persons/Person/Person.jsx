import React, {useContext, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import Aux from '../../../hoc/Auxilary';
import WithClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/Auth-context';

const Person = (props) => {
    const refID = useRef(null);
    const authContext = useContext(AuthContext);
    useEffect(()=>{
        refID.current.focus();
    }, [...props.name]);
    return(
        <WithClass classes = 'Person'>
            {authContext.authenticated ? <p>Authenticated</p>: <p>Please log in</p>}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old </p>
            <p>{props.children}</p>
            <input 
                type = "text"  
                onChange={props.changed} 
                value={props.name}
                ref= {refID}/>
        </WithClass>);    
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;