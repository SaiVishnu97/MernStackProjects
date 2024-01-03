import { createStore,combineReducers } from "redux";

const initialState={
    products:[],
    cart:[],
};
export const addProducts=(data)=>{
    return{
        type:"ADD_PRODUCTS",
        payload:data
    }
}
export const addusername=(data)=>
{
    return{
        type:"ADD_USERNAME",
        payload:data
    }
}
export const addProductsToCart=(data,count)=>
{
    return{
        type:"ADD_PRODUCTS_TO_CART",
        payload:{data,count}
    }
}
export const removeProductsFromCart=(data,count)=>
{
    return{
        type:"REMOVE_PRODUCTS_FROM_CART",
        payload:{data,count}
    }
}
const addProductsReducers=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "ADD_PRODUCTS":
            return {
                products:action.payload,
                cart:state.cart
            }
        case "ADD_PRODUCTS_TO_CART":
            if(action.payload.count>1)
            {
                let index=state.cart.findIndex(val=>val.title===action.payload.data.title)
                let updatedCart = [...state.cart];
                
                if (index !== -1) {
                    updatedCart[index] = {
                        ...action.payload.data,
                        count: action.payload.count
                    };
                } else {
                    updatedCart = [...state.cart, { ...action.payload.data, count: action.payload.count }];
                }

                return {
                    products: state.products,
                    cart: updatedCart
                };
            }
            return{
                products:state.products,
                cart:[...state.cart,{...action.payload.data,count:action.payload.count}]
            }
        case "REMOVE_PRODUCTS_FROM_CART":
            if(action.payload.count===0)
            {
                let index=state.cart.findIndex(val=>val.title===action.payload.data.title)
                let updatedCart=[...state.cart]
                updatedCart.splice(index,1)
                return{
                    products:state.products,
                    cart:updatedCart
                }
            }
            else
            {
                let index=state.cart.findIndex(val=>val.title===action.payload.data.title)
                let updatedCart=[...state.cart]
                updatedCart[index].count=action.payload.count
                return{
                    products:state.products,
                    cart:updatedCart
                }
            }
        default:
            return state
    }
    
}

const rootReducer=combineReducers({
    product:addProductsReducers,
})

export const productstore=createStore(rootReducer)

