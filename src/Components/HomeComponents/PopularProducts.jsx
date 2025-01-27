import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllRecipes } from "../../Redux/Action"; // Adjust the path if necessary
import recipeData from "../../ApiData/recipe.json"; // Import fallback JSON data
import { HeartIcon } from "@heroicons/react/24/outline";
import { AiOutlineArrowRight } from "react-icons/ai";

const PopularProducts = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const popularRecipes = useSelector(
    (state) => state.recipeData.popularRecipes
  );

  // Use fallback data if API data isn't available
  const recipeList =
    popularRecipes && popularRecipes.length > 0
      ? popularRecipes
      : recipeData.hits;

  useEffect(() => {
    const fetchAndSetRecipes = async () => {
      await dispatch(fetchAllRecipes());
      setLoading(false);
    };

    if (!popularRecipes.length) {
      fetchAndSetRecipes();
    } else {
      setLoading(false);
    }
  }, [dispatch, popularRecipes.length]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <section className="container mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
        Popular Recipe Collections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipeList.map((recipe, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden hover:border-yellow-500 transition-shadow duration-300"
          >
            {/* Recipe Image */}
            <div className="relative">
              <img
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                className="w-full h-64 object-cover rounded-2xl border"
              />
              <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                <HeartIcon className="h-6 w-6 text-gray-600 hover:text-red-500 transition duration-300" />
              </div>
            </div>
            {/* Recipe Content */}
            <div className="p-4">
              <div className="flex items-center">
                <h3 className="text-lg font-bold text-gray-800">
                  {recipe.recipe.label}
                </h3>
                <AiOutlineArrowRight className="ml-3 text-xl text-gray-600 hover:text-gray-800 transition duration-300" />
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {recipe.recipe.description ||
                  "Explore this amazing recipe to experience rich flavors."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
