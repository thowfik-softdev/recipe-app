import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <section className="realtive pt-15 px-6 bg-white overflow-hidden h-[calc(100vh-80px)]">
      {/* Bg Image */}
      <img
        className=" absolute top-0 right-0 w-[50rem] select-none"
        src="/pageLayout/1.png"
        alt=""
        draggable={false}
      />
      <img
        className=" absolute top-[50rem] left-0 w-40 select-none"
        src="/pageLayout/2.png"
        alt=""
        draggable={false}
      />

      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 py-6">
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Discover Delicious Recipes
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Explore a world of flavors and learn to cook like a pro with our
              step-by-step recipes. From comfort food to gourmet dishes, we have
              something for everyone.
            </p>
            <Link
              to="/recipes"
              className="inline-flex items-center mt-6 rounded-full bg-black hover:bg-yellow-500 text-white font-bold px-6 py-3 text-sm sm:text-base md:text-lg lg:text-lg transition duration-300"
            >
              Explore Recipes
              <AiOutlineArrowRight className="ml-3 text-xl" />
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex justify-center py-6">
          <div className="relative">
            <img
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg hero_img overflow-hidden select-none"
              src="/1.png"
              alt="Hero"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
