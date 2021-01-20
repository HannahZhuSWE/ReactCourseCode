import React from 'react';
import AuthContext from '../../context/Auth-context';

const cockpit = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button 
            onClick={props.clicked}>Toggle Persons
            </button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer>
            
        </div>
        
    );
}

export default cockpit;