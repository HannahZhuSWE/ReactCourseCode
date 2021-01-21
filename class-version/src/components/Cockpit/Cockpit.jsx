import React from 'react';
import AuthContext from '../../context/Auth-context';
import Radium from 'radium';

const cockpit = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <p className = {props.paragraphStyle}>This is really working!</p>
            <button 
            style={props.buttonStyle}
            onClick={props.clicked}>Toggle Persons
            </button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer>
            
        </div>
        
    );
}

export default Radium(cockpit);