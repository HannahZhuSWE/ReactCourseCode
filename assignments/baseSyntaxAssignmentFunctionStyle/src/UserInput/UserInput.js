import React from 'react';
//import './UserInput.css'

const userInput = (props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '2px solid blue',
        padding: '8px',
        margin: '16px'
      };
    return(
        <div>
            <input style = {style} type = "text" placeholder='User Input' onChange={props.changed} value={props.username}/>
        </div>)    
};

export default userInput;