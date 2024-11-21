import { combineReducers } from "redux"; // Import combineReducers to combine multiple reducers
import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from Redux Toolkit


import FetchShemesReducer from "./Reducer/Fetch_AllSchemes";

const rootReducer = combineReducers({
 
  
  fetchShemes:FetchShemesReducer,
});


const store = configureStore({
  reducer: rootReducer, 
 
});


export default store;
