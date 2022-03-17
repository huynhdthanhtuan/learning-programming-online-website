
export const initialState = null

export const reducer = (state,action)=>{ 
    let newState
    
    switch(action.type) {
        case "USER":
            newState = action.payload
            break;
        case "CLEAR":
                newState = null
                break;    
        default:
            throw new Error('Invalid action')    
    }
    return newState
}