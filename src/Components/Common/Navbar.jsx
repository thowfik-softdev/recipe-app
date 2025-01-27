import React, { useState, useEffect, useRef } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import {
  HomeIcon,
  BookOpenIcon,
  InformationCircleIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon className="h-6 w-6" />,
    current: true
  },
  {
    name: "Recipes",
    href: "/recipes",
    icon: <BookOpenIcon className="h-6 w-6" />,
    current: false
  },
  {
    name: "About Us",
    href: "/about",
    icon: <InformationCircleIcon className="h-6 w-6" />,
    current: false
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: <PhoneIcon className="h-6 w-6" />,
    current: false
  }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);
  const offCanvasRef = useRef(null);

  const toggleOffCanvas = () => setOffCanvasOpen(!isOffCanvasOpen);
  const closeOffCanvas = () => setOffCanvasOpen(false);

  useEffect(() => {
    const toggleBodyOverflow = () => {
      document.body.style.overflow = isOffCanvasOpen ? "hidden" : "";
    };

    toggleBodyOverflow();
  }, [isOffCanvasOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        offCanvasRef.current &&
        !offCanvasRef.current.contains(event.target)
      ) {
        closeOffCanvas();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [offCanvasRef]);

  return (
    <Disclosure as="nav" className="bg-white shadow-lg z-50">
      {({ open }) => (
        <>
          <div
            className="container mx-auto px-2 md:px-4 sm:px-6 lg:px-8 py-2 md:py-4"
            aria-hidden={isOffCanvasOpen ? "true" : "false"}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  className="h-12 w-auto select-none"
                  src="/NavLogo.png"
                  alt="Your Logo"
                  draggable="false"
                />
              </div>

              {/* Desktop Menu */}
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "text-yellow-500"
                        : "text-black hover:text-yellow-500",
                      "px-3 py-2 font-semibold lg:text-base transition-colors duration-300"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="hidden sm:flex justify-center items-center">
                {" "}
                {/* Favorite Icon */}
                <HeartIcon
                  className="h-6 w-6 text-black cursor-pointer"
                  aria-hidden="true"
                />
                {/* User Profile Icon */}
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center text-sm focus:outline-none ml-5">
                    <img
                      className="h-8 w-8 rounded-full border border-black select-none"
                      src="https://static.vecteezy.com/system/resources/thumbnails/052/793/073/small_2x/chef-logo-design-vector.jpg"
                      alt="User Icon"
                      draggable="false"
                    />
                  </Menu.Button>
                </Menu>
              </div>

              {/* Mobile Menu Button */}
              <div className="sm:hidden flex items-center">
                <HeartIcon
                  className="h-6 w-6 text-black mr-2"
                  aria-hidden="true"
                />
                <button
                  onClick={toggleOffCanvas}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Screen Overlay */}
          {isOffCanvasOpen && (
            <div
              className="fixed inset-0 bg-gray-700 bg-opacity-60 backdrop-blur-md opacity-90 z-30 transition-opacity duration-300 ease-in-out"
              onClick={closeOffCanvas}
            ></div>
          )}

          {/* Off-Canvas Menu */}
          <div
            ref={offCanvasRef}
            className={`fixed inset-y-0 left-0 z-40 w-64 rounded-r-xl border bg-white bg-opacity-90 shadow-lg backdrop-blur-md transform transition-all duration-700 ease-in-out ${
              isOffCanvasOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            {/* Header */}
            <div className="flex sticky top-0 left-0 bg-white w-full items-center justify-between p-4 border-b rounded-t-xl">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <button
                onClick={closeOffCanvas}
                className="text-red-500 hover:text-red-300"
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Profile Section */}
            <div className="p-4 border-b">
              <div className="flex items-center space-x-4">
                <img
                  className="h-10 w-10 rounded-full border border-black select-none"
                  src="https://static.vecteezy.com/system/resources/thumbnails/052/793/073/small_2x/chef-logo-design-vector.jpg"
                  alt=""
                  draggable="false"
                />
                <div>
                  <p className="font-medium text-gray-800">Guest</p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeOffCanvas} // Close the menu on link click
                  className="flex items-center gap-4 px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
                >
                  {item.icon} {/* Display the icon */}
                  <span>{item.name}</span> {/* Display the name */}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
