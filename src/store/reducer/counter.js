import {update} from '../utility';

const intialState = {
    counter: 0,
}


const reducer = (state = intialState,action) => {


    switch (action.type) 
    {
        case 'INCREMENT':
        return update(state,{counter: state.counter + 1})    

        case 'DECREMENT':
            return update(state,{counter: state.counter - 1}) 

        case 'ADD':
            return update(state,{counter: state.counter + action.value})

        case 'SUBSTRACT':
            return update (state,{counter: state.counter - action.value})
        default:
            return state;

    }
   
};

export default reducer;