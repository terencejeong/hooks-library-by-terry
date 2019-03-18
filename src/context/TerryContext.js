import React, { createContext, useReducer } from 'react';

// Create the Context;
let TerryContext = createContext();

// Create the initial state
let initialState = {
  name: 'Terry',
  lastName: 'Jeong',
};

// Create the reducer
let reducer = (state, action) => {
  switch(action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload
      };
    case "SET_LAST_NAME":
      return {
        ...state,
        lastName: action.payload
      };
    case "RESET":
      return initialState
    default:
      return initialState
  }
};


function TerryContextProvider(props) {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };
  return (
    <TerryContext.Provider value={value}>
      {props.children}
    </TerryContext.Provider>
  )
}

let TerryConsumer = TerryContext.Consumer;

export { TerryContext, TerryContextProvider, TerryConsumer }
