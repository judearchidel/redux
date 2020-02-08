import {update} from '../utility';


const intialState = {
    report: []
}

const deleteResult = (state, action) => {
    const upadtedArray = state.report.filter(res => res.id !== action.reid)
    return update (state,{ report: upadtedArray})
}


const reducer = (state = intialState,action) => {


    switch (action.type) 
    {
        case 'SAVE_REPORT':
            return update(state,{report: state.report.concat({ id: new Date(),value: action.result})})
        case 'DELETE_REPORT':  
           return deleteResult(state,action)
        
        default:
            return state;

    }
   
};

export default reducer;