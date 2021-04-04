//set up data layer
// we need this to track The basket
//so it's like creating global variables that can be passed around in a React app.
// Instead of passing props from grandparent to parent to child and so no.

import React , { createContext,useContext,useReducer } from "react";

// This is data layer
export const StateContext=createContext();

// Build A provider wrap entire app
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider  value={useReducer(reducer, initialState)} >
       {/* children refers to app component  */}
       {children} 
   </StateContext.Provider>
);
// This is how we use it inside the component pull the data
export const useStateValue=()=>useContext(StateContext);