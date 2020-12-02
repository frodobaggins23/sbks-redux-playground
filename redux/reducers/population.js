const initialState = {
    value:1000,
}

export const populationReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case "POPULATION/GROW":
            return {
                ...state,
                value: state.value+=1,
            }            
        case "POPULATION/SHRINK":
            return {
                ...state,
                value: state.value-=1,
        }   
        default:
            return state
    }
}