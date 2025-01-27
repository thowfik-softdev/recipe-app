import axios from "axios";
import * as types from "./ActionTypes";

export const fetchAllRecipes = () => async (dispatch) => {
  const url =
    "https://api.edamam.com/search?q=pizza&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=50";

  const makeRequest = async (retryCount = 0) => {
    try {
      const res = await axios.get(url);
      dispatch({ type: types.GETALLRECIPES, payload: res.data.hits });
      dispatch(getPopularRecipes(res.data.hits));
    } catch (error) {
      if (error.response && error.response.status === 429 && retryCount < 3) {
        // Wait for 2 seconds before retrying
        setTimeout(() => makeRequest(retryCount + 1), 2000 * retryCount);
      } else {
        console.error("Error fetching recipes:", error);
      }
    }
  };

  makeRequest();
};

export const getPopularRecipes = (recipes) => {
  const shuffled = recipes.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 6);
  return {
    type: types.GETPOPULARRECIPES,
    payload: selected
  };
};
