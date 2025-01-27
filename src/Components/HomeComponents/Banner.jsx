import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="h-[40rem] w-full md:h-[calc(100vh-80px)] bg-contain bg-no-repeat sm:bg-cover sm:bg-center"
      style={{
        backgroundImage: "url('/banner_2.jpg')"
      }}
    >
      <div className="relative px-4 sm:px-6 lg:px-8 pt-14">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto absolute top-15 md:top-40 right-0 left-0 text-center">
          <div className="text-black">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight">
              Discover Delicious Recipes
            </h1>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-lg lg:text-xl font-medium">
              Explore a world of flavors and learn to cook like a pro with our
              step-by-step recipes. From comfort food to gourmet dishes, we have
              something for everyone.
            </p>
            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6">
              <Link
                to="/recipes"
                className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-white bg-black transition ease-in-out duration-300 hover:text-white hover:bg-yellow-500 shadow-sm"
              >
                Explore Recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
