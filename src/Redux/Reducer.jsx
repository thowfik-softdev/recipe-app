import * as types from "./ActionTypes";

const initialState = {
  recipes: [],
  popularRecipes: [],
  favRecipes: []
};

export const Reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(">>>>>>type", type);
  console.log(">>>>>>payload", payload);

  switch (type) {
    case types.GETALLRECIPES:
      return {
        ...state,
        recipes: payload
      };
    case types.GETPOPULARRECIPES:
      return {
        ...state,
        popularRecipes: payload
      };
    case types.ADDTOFAV:
      return {
        ...state,
        favRecipes: [...state.favRecipes, payload]
      };
    case types.REMOVETOFAV:
      return {
        ...state,
        favRecipes: state.favRecipes.filter((recipe) => recipe.uri !== payload)
      };
    default:
      return state;
  }
};
