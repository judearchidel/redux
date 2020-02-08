import * as actionTypes from './actions';

export const storeReport = (res) => {
    return{
        type: actionTypes.SAVE_REPORT,
        result: res
    }
}
export const saveReport = (res) => {
    return dispatch => {
        setTimeout( ()=>{
            dispatch(storeReport(res))
        }, 2000);
    }
}


export const deleteReport = (id) => {
    return {
        type:  actionTypes.DELETE_REPORT,
        reid: id
    }
}