import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCrators from '../../store/action/index';

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
                <button onClick={() => this.props.onSaveReport(this.props.ctr)}>Save Report</button>
                <ul>
                </ul>
            { this.props.str.map(el => {
                return <li key={el.id} onClick={()=>this.props.onDeleteReport(el.id)}>{el.value}</li>
            })
            }
                </div>
        );
    }
}


const mapStatetoProps = state => {
    return {
        ctr: state.ctr.counter,
        str: state.rst.report
    };
};

const mapDispatchToProps = dispatch =>{
return {
    onIncrementCounter: () => dispatch(actionCrators.increment()),
    onDecrementCounter: ()=> dispatch (actionCrators.decrement()),
    OnAddCounter: () => dispatch (actionCrators.add(5)),
    onSubtractCounter: ()=> dispatch (actionCrators.substract(5)),
    onSaveReport: (res)=> dispatch(actionCrators.saveReport(res)),
    onDeleteReport : (id)=> dispatch (actionCrators.deleteReport(id))
 };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);