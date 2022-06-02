
const reducer = (state=0,action=0) => {
    if(action.type==='deposit'){
        return state + action.payload
    }
    else if(action.type==='withdraw')
    {
        return state - action.payload
    }
    else
    {
        return state;
    }
}

export default reducer;