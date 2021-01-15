import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>This is paragraph 1 which is the username: {props.username}</p> 
            <p>This is paragraph 2. I couldn't think of anything to write here.</p> 
        </div>)    
};

export default userOutput;