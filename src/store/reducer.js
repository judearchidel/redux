const intialState = {
    counter: 0,
    report: []
}


const reducer = (state = intialState,action) => {


    switch (action.type) 
    {
        case 'INCREMENT':
            return{
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ... state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBSTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'SAVE_REPORT':
            return {
                ...state,
                report: state.report.concat(state.counter)
            }
        default:
            return state;

    }
   
};

export default reducer;