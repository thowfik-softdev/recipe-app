// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel
// } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
// import { FiLoader } from "react-icons/fi";
// import { GiKnifeFork } from "react-icons/gi";
// import { BsHeartFill } from "react-icons/bs";
// import { AiOutlineLink } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchRecipes, addToFav } from "../../Redux/Action";
// const filters = [
//   {
//     id: "cuisine",
//     name: "Cuisine",
//     options: [
//       { value: "italian", label: "Italian" },
//       { value: "chinese", label: "Chinese" },
//       { value: "indian", label: "Indian" },
//       { value: "mexican", label: "Mexican" },
//       { value: "american", label: "American" }
//     ]
//   },
//   {
//     id: "diet",
//     name: "Dietary Preferences",
//     options: [
//       { value: "vegetarian", label: "Vegetarian" },
//       { value: "vegan", label: "Vegan" },
//       { value: "gluten-free", label: "Gluten-Free" },
//       { value: "dairy-free", label: "Dairy-Free" },
//       { value: "pescatarian", label: "Pescatarian" }
//     ]
//   },
//   {
//     id: "mealType",
//     name: "Meal Type",
//     options: [
//       { value: "breakfast", label: "Breakfast" },
//       { value: "lunch", label: "Lunch" },
//       { value: "dinner", label: "Dinner" },
//       { value: "snack", label: "Snack" },
//       { value: "dessert", label: "Dessert" }
//     ]
//   }
// ];

// export default function Product() {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const recipes = useSelector((state) => state.data.recipes);

//   useEffect(() => {
//     const fetchAndSetRecipes = async () => {
//       await dispatch(fetchRecipes());
//       setLoading(false);
//     };
//     fetchAndSetRecipes();
//   }, [dispatch]);

//   return (
//     <div className="bg-[#FFE8B6]">
//       <div>
//         {/* Mobile filter dialog */}
//         <Dialog
//           open={mobileFiltersOpen}
//           onClose={setMobileFiltersOpen}
//           className="relative z-40 lg:hidden"
//         >
//           <DialogBackdrop className="fixed inset-0 bg-black/25 transition-opacity" />
//           <div className="fixed inset-0 z-40 flex">
//             <DialogPanel className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-[#FFE8B6] py-4 pb-6 shadow-xl">
//               <div className="flex items-center justify-between px-4">
//                 <h2 className="text-lg font-medium text-[#5B913B]">Filters</h2>
//                 <button
//                   type="button"
//                   onClick={() => setMobileFiltersOpen(false)}
//                   className="-mr-2 flex size-10 items-center justify-center p-2 text-[#D99D81] hover:text-[#77B254]"
//                 >
//                   <span className="sr-only">Close menu</span>
//                   <XMarkIcon aria-hidden="true" className="size-6" />
//                 </button>
//               </div>
//               <form className="mt-4">
//                 {filters.map((section) => (
//                   <Disclosure
//                     key={section.name}
//                     as="div"
//                     className="border-t border-[#D99D81] pt-4 pb-4"
//                   >
//                     <fieldset>
//                       <legend className="w-full px-2">
//                         <DisclosureButton className="group flex w-full items-center justify-between p-2 text-[#77B254] hover:text-[#5B913B]">
//                           <span className="text-sm font-medium text-[#5B913B]">
//                             {section.name}
//                           </span>
//                           <span className="ml-6 flex h-7 items-center">
//                             <ChevronDownIcon
//                               aria-hidden="true"
//                               className="size-5 rotate-0 transform group-data-open:-rotate-180"
//                             />
//                           </span>
//                         </DisclosureButton>
//                       </legend>
//                       <DisclosurePanel className="px-4 pt-4 pb-2">
//                         <div className="space-y-6">
//                           {section.options.map((option, optionIdx) => (
//                             <div key={option.value} className="flex gap-3">
//                               <div className="flex h-5 shrink-0 items-center">
//                                 <input
//                                   defaultValue={option.value}
//                                   id={`${section.id}-${optionIdx}-mobile`}
//                                   name={`${section.id}[]`}
//                                   type="checkbox"
//                                   className="appearance-none rounded-sm border border-[#77B254] bg-[#FFE8B6] checked:bg-[#77B254] focus:ring-[#5B913B]"
//                                 />
//                               </div>
//                               <label
//                                 htmlFor={`${section.id}-${optionIdx}-mobile`}
//                                 className="text-sm text-[#5B913B]"
//                               >
//                                 {option.label}
//                               </label>
//                             </div>
//                           ))}
//                         </div>
//                       </DisclosurePanel>
//                     </fieldset>
//                   </Disclosure>
//                 ))}
//               </form>
//             </DialogPanel>
//           </div>
//         </Dialog>

//         <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//           <div className="border-b border-[#D99D81] pb-10 flex justify-between items-center">
//             {/* Title and Description */}
//             <div>
//               <h1 className="text-4xl font-bold tracking-tight text-[#5B913B]">
//                 Latest Recipes
//               </h1>
//               <p className="mt-4 text-base text-[#5B913B]">
//                 Discover our newest collection of mouthwatering recipes,
//                 handpicked to satisfy every craving!
//               </p>
//             </div>

//             {/* Favorites Icon */}
//             <button
//               onClick={() => navigateToFavorites()} // Replace this with your navigation logic
//               className="flex items-center gap-2 text-[#5B913B] hover:text-[#77B254] transition-colors"
//             >
//               <BsHeartFill className="text-2xl text-[#FF6347]" />
//               <span className="text-lg font-medium">
//                 Favorites Just for You
//               </span>
//             </button>
//           </div>

//           <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
//             <aside>
//               <h2 className="sr-only">Filters</h2>
//               <button
//                 type="button"
//                 onClick={() => setMobileFiltersOpen(true)}
//                 className="inline-flex items-center lg:hidden"
//               >
//                 <span className="text-sm font-medium text-[#5B913B]">
//                   Filters
//                 </span>
//                 <PlusIcon
//                   aria-hidden="true"
//                   className="ml-1 size-5 shrink-0 text-[#77B254]"
//                 />
//               </button>
//               <div className="hidden lg:block">
//                 <form className="space-y-10 divide-y divide-[#D99D81] ">
//                   {filters.map((section, sectionIdx) => (
//                     <div
//                       key={section.name}
//                       className={sectionIdx === 0 ? null : "pt-10"}
//                     >
//                       <fieldset>
//                         <legend className="block text-lg font-medium text-[#5B913B]">
//                           {section.name}
//                         </legend>
//                         <div className="space-y-3 pt-6">
//                           {section.options.map((option, optionIdx) => (
//                             <div key={option.value} className="flex gap-3 ">
//                               <div className="flex h-5 shrink-0 items-center">
//                                 <input
//                                   defaultValue={option.value}
//                                   id={`${section.id}-${optionIdx}`}
//                                   name={`${section.id}[]`}
//                                   type="checkbox"
//                                   className=" border border-[#77B254] bg-[#FFE8B6] checked:bg-[#77B254] focus:ring-[#5B913B] "
//                                 />
//                               </div>
//                               <label
//                                 htmlFor={`${section.id}-${optionIdx}`}
//                                 className="text-md text-[#5B913B]"
//                               >
//                                 {option.label}
//                               </label>
//                             </div>
//                           ))}
//                         </div>
//                       </fieldset>
//                     </div>
//                   ))}
//                 </form>
//               </div>
//             </aside>
//             {/* Product grid */}
//             <div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
//               {loading ? (
//                 <div className="text-center mt-10 text-xl text-[#77B254] flex items-center justify-center gap-2">
//                   <FiLoader className="animate-spin text-2xl" />
//                   Loading recipes...
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {recipes.map((item, index) => {
//                     const recipe = item.recipe;
//                     return (
//                       <div
//                         key={index}
//                         className="relative bg-white/40 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
//                       >
//                         {/* Image Section */}
//                         <div className="relative w-full h-52 overflow-hidden rounded-xl shadow-md">
//                           <img
//                             src={recipe.image}
//                             alt={recipe.label}
//                             className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
//                           <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-md text-[#5B913B] font-semibold text-xs px-3 py-1 rounded-md shadow-md flex items-center gap-1">
//                             <GiKnifeFork className="text-sm" />
//                             {recipe.cuisineType && recipe.cuisineType.length > 0
//                               ? recipe.cuisineType
//                                   .map(
//                                     (type) =>
//                                       type.charAt(0).toUpperCase() +
//                                       type.slice(1)
//                                   )
//                                   .join(", ")
//                               : "Cuisine"}
//                           </div>
//                         </div>

//                         {/* Content Section */}
//                         <div className="flex-1 mt-4">
//                           {/* Recipe Title */}
//                           <h2 className="text-lg font-semibold text-gray-800 tracking-tight leading-tight">
//                             {recipe.label}
//                           </h2>

//                           {/* Health Labels */}
//                           <div className="flex flex-wrap gap-1 mt-2">
//                             {recipe.healthLabels.slice(0, 3).map((label, i) => (
//                               <span
//                                 key={i}
//                                 className="bg-[#77B254] text-white text-xs font-medium px-2 py-1 rounded-full shadow-sm hover:shadow-md transition-transform hover:scale-105"
//                               >
//                                 {label}
//                               </span>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Call-to-Action Button */}
//                         <a
//                           href={recipe.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="mt-2 text-center bg-[#5B913B] text-white font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg hover:bg-[#77B254] flex items-center justify-center gap-2"
//                         >
//                           <AiOutlineLink className="text-base" />
//                           View Recipe
//                         </a>

//                         {/* Favorite Button */}
//                         <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-110">
//                           <BsHeartFill
//                             className="text-[#FF6347] text-base"
//                             onClick={() => dispatch(addToFav(item.recipe))}
//                           />
//                         </button>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import React from "react";

const Product = () => {
  return <div>Product</div>;
};

export default Product;
