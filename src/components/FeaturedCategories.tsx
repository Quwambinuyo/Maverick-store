import { Products } from "../data/ProductData";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import type { Product, ProductsType } from "../types/types";

const FeaturedCategories = () => {
  const allCategories: Product[] = [];
  const typedcategories = Products as ProductsType;

  for (const categoryKey in typedcategories) {
    const category = typedcategories[categoryKey];
    for (const subKey in category) {
      const categoryArray = category[subKey];
      allCategories.push(...categoryArray);
    }
  }

  return (
    <section>
      <div className="text-center my-9">
        <h2 className="text-[20px] sm:text-2xl font-bold">
          Featured Categories
        </h2>
        <p className="text-sm font-light text-gray-500 sm:text-[20px]">
          Choose your necessary products from these featured categories.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-screen-xl mx-auto mb-5 px-5">
        {Object.entries(Products).map(([categoryName, subGroups]) => (
          <div
            key={categoryName}
            className="border border-gray-200 rounded-lg p-4 flex flex-col gap-4 shadow-sm bg-white"
          >
            {/* Link to /categories/:category */}
            <NavLink
              to={`/categories/${categoryName}`}
              className="text-xl font-semibold mb-3 text-primary-color hover:text-purple-900 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              {categoryName}
            </NavLink>

            <ul className="space-y-2">
              {Object.entries(subGroups).map(([subGroupName]) => (
                <li key={subGroupName}>
                  {/* Link to /categories/:category/:subGroup */}
                  <NavLink
                    to={`/categories/${categoryName}/${subGroupName}`}
                    className="flex items-center gap-1 text-gray-700 hover:text-primary-color transition-colors"
                  >
                    <IoIosArrowForward className="text-xs" />
                    <span>{subGroupName}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
