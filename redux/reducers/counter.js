const initialState = {
    value:0,
}

export const counterReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case "COUNTER/ADD":
            return {
                ...state,
                value: state.value+=1,
            }            
        case "COUNTER/REMOVE":
            return {
                ...state,
                value: state.value-=1,
        }   
        default:
            return state
    }
}