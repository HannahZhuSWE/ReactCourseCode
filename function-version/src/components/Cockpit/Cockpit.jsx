import React, {useEffect} from 'react';

const Cockpit = (props) => {
    useEffect(() =>{
        console.log('[Cockpit.js] useEffect');
        //Http request...
        setTimeout(()=>{
            alert('Saved data');
        }, 1000);

        return () => {
            console.log('[Cockpit.js] cleanup work useEffect');
        }
    }, [] ); // will only run once because of the empty array
    return (
        <div>
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button 
            onClick={props.clicked}>Toggle Persons
            </button>
        </div>
        
    );
}

export default Cockpit;