const counterReducer = (state = 0,action) => {
    switch(action.type){
        case 'Inc':
            return state+action.payload
        case 'Dec':
            return state-action.payload
        case 'Reset':
            return action.payload    
        default:
            return state
    }
}
export default counterReducer;