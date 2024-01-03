import { createStore } from "redux";
import { productreducers } from "./reducers/productreducers";

export const store=createStore(productreducers,{},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
