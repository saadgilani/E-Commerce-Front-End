import redux,{ createStore,combineReducers,applyMiddleware } from "redux";
import countReducer from './count/countReducer';
import Item_Reducer from "./cart/cartReducer";



const rootReducer=combineReducers({
    sliceA: countReducer,
    sliceB: Item_Reducer
});

export const store=createStore(rootReducer);