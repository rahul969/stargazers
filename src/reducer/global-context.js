import React, { createContext, useReducer } from "react";
import AppReducer from "./app-reducer";

const initialState = {
  currentTopic: "react",
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
