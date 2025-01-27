import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/HomeComponents/Home";
import Product from "./Components/HomeComponents/Product";
import Recipes from "./Components/RecipeComponents/Recipes";

const App = () => {
  return (
    <div className="select-style">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
