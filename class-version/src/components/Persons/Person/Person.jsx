import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import WithClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/Auth-context';

class Person extends Component {
    static contextType = AuthContext;
    componentDidMount(){
        this.elementRef.focus();
    }

    render(){
    console.log('[Person.js] rendering...');
    return(
        <WithClass classes="Person">
            {this.context.authenticated ? <p>Authenticated</p>: <p>Please log in</p>}
            
           
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old </p>
            <p>{this.props.children}</p>
            <input 
                type = "text" 
                onChange={this.props.changed} 
                value={this.props.name}
                ref = {(ref) => {this.elementRef=ref}}/>
        </WithClass>);
    }    
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;