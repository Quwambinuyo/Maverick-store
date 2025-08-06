import { Products } from "../data/ProductData";
import type { Product } from "../types/types";
import { BsCartPlus } from "react-icons/bs";

const getAllDiscountedProducts = () => {
  const result: Product[] = [];

  Object.values(Products).forEach((category) => {
    Object.values(category).forEach((subCategory) => {
      subCategory.forEach((item) => {
        result.push(item);
      });
    });
  });

  return result;
};

const DiscountProducts = () => {
  const discountedProducts = getAllDiscountedProducts();

  return (
    <section className="px-4">
      <div className="mt-9">
        <div className="text-center w-[340px] md:w-[500px] mx-auto space-y-1.5">
          <h2 className="text-sm font-bold text-black md:text-2xl">
            Latest Discounted Products
          </h2>
          <p className="text-sm font-semibold text-gray-700">
            See Our latest discounted products below. Choose your daily needs
            from here and get a special discount with free shipping.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {discountedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-2 relative group"
            >
              <span className="absolute top-6 right-4 bg-primary-color text-white text-xs font-bold px-2 py-1 rounded">
                {product.discountPercent}% OFF
              </span>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />

              <div className="mt-2">
                <h3 className="text-sm font-semibold truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary-color font-bold">
                    ${product.discountPrice}
                  </span>
                  <span className="text-gray-400 line-through">
                    ${product.price}
                  </span>
                </div>
              </div>

              <button className="absolute bottom-2 right-2 text-white bg-primary-color p-2 rounded-full hover:bg-secondary-color transition-all">
                <BsCartPlus size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountProducts;
