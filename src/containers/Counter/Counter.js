import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                break;    
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.OnAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={this.props.onSaveReport}>Save Report</button>
                <ul>
                </ul>
            { this.props.str.map(el => {
                return <li>{el}</li>
            })
            }
                </div>
        );
    }
}


const mapStatetoProps = state => {
    return {
        ctr: state.counter,
        str: state.report
    };
};

const mapDispatchToProps = dispatch =>{
return {
    onIncrementCounter: () => dispatch({
        type: 'INCREMENT'
    }),
    onDecrementCounter: ()=> dispatch ({
        type: 'DECREMENT'  
    }),
    OnAddCounter: () => dispatch ({
        type: 'ADD',
        value: 5
    }),
    onSubtractCounter: ()=> dispatch ({
        type: 'SUBSTRACT',
        value: 5
    }),
    onSaveReport: ()=> dispatch({
        type: 'SAVE_REPORT'
    })
 };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);