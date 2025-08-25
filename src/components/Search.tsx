import { Products } from "../data/ProductData";
import type { Product, ProductsType } from "../types/types";
import { BsCartPlus } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import { formatPrice } from "../utils/utilityfunc";
import { useCartStore } from "../features/cartstore";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const allProducts: Product[] = [];
  const typedProducts = Products as ProductsType;

  // Collect all products
  for (const categoryKey in typedProducts) {
    const category = typedProducts[categoryKey];
    for (const subKey in category) {
      const productsArray = category[subKey];
      allProducts.push(...productsArray);
    }
  }

  const { cart, addToCart, increment, decrement } = useCartStore();

  return (
    <section>
      {/* Header */}
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

      {/* Products grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 xl:grid-cols-4 p-1 sm:gap-4 md:px-2">
        {allProducts.length > 0 ? (
          allProducts.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            const isOutOfStock =
              product.amount === 0 || (cartItem && cartItem.quantity === 0);

            return (
              <Link
                to={`/singleProduct/${product.id}`}
                key={product.id}
                className="p-2 rounded-md shadow relative bg-white flex flex-col h-[270px]"
              >
                {/* Out of stock badge */}
                {isOutOfStock && (
                  <div className="absolute top-3 p-2 left-4 w-[80px] bg-red-200 text-red-600 rounded-lg text-center font-bold py-1 text-xs">
                    Stock Out
                  </div>
                )}

                {/* Product image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 sm:h-48 object-contain rounded mb-2"
                />

                {/* Product name */}
                <h2 className="text-xs sm:text-sm font-semibold line-clamp-1">
                  {product.name}
                </h2>

                {/* Price + Cart button */}
                <div className="flex justify-between items-center mt-2">
                  <span className="text-primary-color font-bold text-sm sm:text-base">
                    {formatPrice(product.price)}
                  </span>

                  {cartItem && cartItem.quantity > 0 ? (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          decrement(product.id);
                        }}
                        className="bg-primary-color text-white p-2 rounded-full"
                      >
                        <FaMinus className="text-xs" />
                      </button>
                      <span className="text-xs font-bold">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          increment(product.id);
                        }}
                        className="bg-primary-color text-white p-2 rounded-full"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="bg-primary-color text-white p-1.5 rounded-full hover:bg-secondary-color transition"
                    >
                      <BsCartPlus className="text-base" />
                    </button>
                  )}
                </div>
              </Link>
            );
          })
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
};

export default PopularProducts;
