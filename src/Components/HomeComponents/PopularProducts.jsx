import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllRecipes } from "../../Redux/Action"; // Adjust path as necessary

const PopularProducts = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const popularRecipes = useSelector(
    (state) => state.recipeData.popularRecipes
  );

  console.log(">>>>>>", popularRecipes);

  useEffect(() => {
    const fetchAndSetRecipes = async () => {
      await dispatch(fetchAllRecipes()); // This fetches all recipes and internally sets popular recipes
      setLoading(false);
    };

    if (!popularRecipes.length) {
      // Fetch only if popularRecipes is empty to avoid unnecessary API calls
      fetchAndSetRecipes();
    } else {
      setLoading(false);
    }
  }, [dispatch, popularRecipes.length]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 py-10">
      {" "}
      {/* Adjust grid styling as needed */}
      {popularRecipes.map((recipe, index) => (
        <div key={index} className="card">
          <img
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold">{recipe.recipe.label}</h3>
            <p>{recipe.recipe.source}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularProducts;
