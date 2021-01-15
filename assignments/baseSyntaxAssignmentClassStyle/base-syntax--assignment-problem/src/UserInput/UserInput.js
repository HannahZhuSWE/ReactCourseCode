import React from 'react';
//import './UserInput.css'

const userInput = (props) => {

    const style = {
        backgroundColor: 'blue',
        font: 'inherit',
        border: '10px solid blue',
        padding: '8px',
        margin: '16px'
      };

    return(
        <div className="UserInput">
            <input style={style} type = "text" placeholder='User Input' onChange={props.changed} value={props.username}/>
        </div>)    
};

export default userInput;