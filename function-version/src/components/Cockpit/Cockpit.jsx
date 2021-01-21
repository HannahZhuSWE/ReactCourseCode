import React, {useContext, useEffect, useRef} from 'react';
import AuthContext from '../../context/Auth-context';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    const toggleBtnRef = useRef();
    const authContext = useContext(AuthContext);
    useEffect(() =>{
        console.log('[Cockpit.js] useEffect');
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work useEffect');
        }
    }, [] ); // will only run once because of the empty array
    let btnClass = [classes.Button];
    if(props.buttonColorRed){
        btnClass.push(classes.Red);
    }
    
    return (
        <div>
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button className={btnClass.join(' ')}
            onClick={props.clicked}
            ref = {toggleBtnRef}>Toggle Persons
            </button>
            <button onClick={authContext.login}>
                Log in
            </button>
        </div>
        
    );
}

export default Cockpit;