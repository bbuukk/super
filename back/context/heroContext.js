import { createContext, useReducer } from "react";

export const HeroContext = createContext();

export const heroReducer = (state, action) => {
  switch (action.type) {
    case "SET_HEROES":
      return {
        heroes: action.payload,
      };
    case "CREATE_HERO":
      return {
        heroes: [action.payload, ...state.heroes],
      };
    case "UPDATE_HERO":
      return {
        heroes: state.heroes.map((hero) => {
          if (hero._id === action.payload._id) {
            return {
              ...hero,
              ...action.payload,
            };
          }
          return hero;
        }),
      };
    case "DELETE_HERO":
      return {
        heroes: state.heroes.filter((hero) => hero.id !== action.payload),
      };
    default:
      return state;
  }
};

export const HeroContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(heroReducer, {
    heroes: null,
  });

  return (
    <HeroContext.Provider value={{ ...state, dispatch }}>
      {children}
    </HeroContext.Provider>
  );
};
