const intialState = {
    report: []
}


const reducer = (state = intialState,action) => {


    switch (action.type) 
    {
        case 'SAVE_REPORT':
            return {
                ...state,
                report: state.report.concat({ id: new Date(),value: action.result})
            }
        case 'DELETE_REPORT':
            
            const upadtedArray = state.report.filter(res => res.id !== action.reid)
            return{
                ...state,
                report: upadtedArray
            }
        default:
            return state;

    }
   
};

export default reducer;