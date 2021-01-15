import React from 'react';

const validationComponent = (props) =>{
    let message = 'The string is too short'
    if(props.text.length > 5){
        message = 'The string is too long'
    }
    return (<p>{message}</p>);
}

export default validationComponent;