// src/components/Layout.js
import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <main className="min-h-[calc(100vh-80px)] overflow-y-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
