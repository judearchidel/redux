export const update = (state, updatedvalues) => {
    return {
        ...state,
        ...updatedvalues
    }
}