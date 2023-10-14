import { createContext, useReducer } from "react";

export const HeroContext = createContext();

export const heroesReducer = (state, action) => {
  switch (action.type) {
    case "SET_HEROES":
      return {
        heroes: action.payload,
      };
    default:
      return state;
  }
};

export const HeroContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(heroesReducer, {
    heroes: [],
  });
  return (
    <HeroContext.Provider value={{ ...state, dispatch }}>
      {children}
    </HeroContext.Provider>
  );
};
