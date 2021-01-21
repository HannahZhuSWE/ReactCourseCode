import React, {useState} from 'react';

import './AddPerson.css';

const AddPerson = (props) => {
    let [age, setAge] = useState('');
    let [name, setName] = useState('');
    return(
        <div className="AddPerson">
            <input 
                type = "text" 
                placeholder="Name" 
                onChange={(event) => setName(event.target.value)}
                value={name}/>
            <input 
                type = "number" 
                placeholder="Age"
                onChange={(event) => setAge(event.target.value)}
                value={age} />
            <button onClick={() => props.personAdded(name, age)}>Add Person</button>
        </div>
    );
    
}
    
    


export default AddPerson;