import { ActionTypes } from "../constants/action-types"

const intialState={
    products:[
        {
            id:1,
            item:"soap",
            price:90,
        },
    ],
}
console.log(intialState)
export function productreducers(state = intialState,action)
{
    console.log("Current state:", state); // Log the entire state
    state=intialState
    switch(action.type)
    {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:action.payload}
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...action.payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            console.log(`Unhandled action type: ${action.type}`);
            console.log(state) 
            return intialState
    }
}

