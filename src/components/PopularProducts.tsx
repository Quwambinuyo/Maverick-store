import { Products } from "../data/ProductData";
import type { Product, ProductsType } from "../types/types";
import { BsCartPlus } from "react-icons/bs";

const PopularProducts = () => {
  const allProducts: Product[] = [];
  const typedProducts = Products as ProductsType;

  for (const categoryKey in typedProducts) {
    const category = typedProducts[categoryKey];
    for (const subKey in category) {
      const productsArray = category[subKey];
      allProducts.push(...productsArray);
    }
  }

  return (
    <section>
      <div className="sm:w-[500px] w-[90%] text-center flex flex-col justify-center mx-auto py-3 space-y-3.5 mb-4">
        <h2 className="text-sm font-bold sm:text-2xl">
          Popular Products for Daily Shopping
        </h2>
        <p className="text-sm sm:text-[15px] font-semibold text-gray-800">
          See all our popular products in this week. You can choose your daily
          needs products from this list and get some special offer with free
          shipping.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-2">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="p-2 rounded-md shadow relative bg-white flex flex-col"
          >
            {product.amount === 0 && (
              <div className="absolute top-3 p-2 left-4 w-[80px] bg-red-200 text-red-600 rounded-lg text-center font-bold py-1 text-xs">
                Stock Out
              </div>
            )}

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-28 sm:h-32 object-cover rounded mb-2"
            />

            <h2 className="text-xs sm:text-sm font-semibold line-clamp-1">
              {product.name}
            </h2>

            <div className="flex justify-between items-center mt-1">
              <span className="text-primary-color font-bold text-xs sm:text-sm">
                ₦{product.price.toFixed(2)}
              </span>
              <button className="bg-primary-color text-white p-1.5 rounded-full hover:bg-secondary-color transition">
                <BsCartPlus className="text-base" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
