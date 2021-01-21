import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions';

const Counter = (props) => {

        return (
            <div>
                <CounterOutput value={props.ctr} />
                <CounterControl label="Increment" clicked={props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={() => props.onSubtractCounter(5)}  />
                <hr/>
                <button onClick={() => props.onStoreResult(props.ctr)}>Store Result</button>
                <ul>
                    {props.storedResults.map(result => {
                        return (<li key={result.id} onClick={() => props.onDeleteResult(result.id)}>{result.value}</li>);
                    })}
                    
                </ul>
            </div>
            
        );
    
}

const mapStateToProps = state =>{
    return{
        ctr : state.ctr.counter,
        storedResults : state.res.results
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: () => dispatch({type: actionType.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionType.DECREMENT}),
        onAddCounter: () => dispatch({type: actionType.ADD, val: 5}),
        onSubtractCounter: (val) => dispatch({type: actionType.SUBTRACT, val}),
        onStoreResult: (result) => dispatch({type: actionType.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionType.DELETE_RESULT, resultElId: id}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);