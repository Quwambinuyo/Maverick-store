import { Products } from "../data/ProductData";
import type { Product } from "../types/types";
import { BsCartPlus } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { useCartStore } from "../features/cartstore";

const getAllDiscountedProducts = (): Product[] => {
  const result: Product[] = [];

  Object.values(Products).forEach((category) => {
    Object.values(category).forEach((subCategory) => {
      subCategory.forEach((item) => {
        if (item.discountPercent > 0) result.push(item);
      });
    });
  });

  return result;
};

const DiscountProducts = () => {
  const discountedProducts = getAllDiscountedProducts();

  const { cart, addToCart, removeFromCart } = useCartStore();

  const isInCart = (id: number) => cart.some((item) => item.id === id);

  const handleCartClick = (product: Product) => {
    if (isInCart(product.id)) {
      removeFromCart(product.id);
    } else {
      addToCart({
        ...product,
        price: product.discountPrice,
      });
    }
  };

  return (
    <section>
      <div className="sm:w-[500px] w-[90%] text-center flex flex-col justify-center mx-auto py-3 space-y-3.5 mb-4">
        <h2 className="text-sm font-bold sm:text-2xl">
          Latest Discounted Products
        </h2>
        <p className="text-sm sm:text-[15px] font-semibold text-gray-800">
          See Our latest discounted products below. Choose your daily needs from
          here and get a special discount with free shipping.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-2">
        {discountedProducts.map((product) => (
          <div
            key={product.id}
            className="p-2 rounded-md shadow relative bg-white flex flex-col"
          >
            {/* Discount Tag */}
            <div className="absolute top-3 p-2 right-4 w-fit bg-green-100 text-green-600 rounded-lg text-center font-bold py-1 text-xs">
              {product.discountPercent}% OFF
            </div>

            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-28 sm:h-32 object-cover rounded mb-2"
            />

            {/* Name */}
            <h2 className="text-xs sm:text-sm font-semibold line-clamp-1">
              {product.name}
            </h2>

            {/* Pricing + Cart Button */}
            <div className="flex justify-between items-center mt-1">
              <div>
                <span className="text-primary-color font-bold text-xs sm:text-sm mr-2">
                  ₦{product.discountPrice.toFixed(2)}
                </span>
                <span className="text-gray-400 line-through text-xs sm:text-sm">
                  ₦{product.price.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => handleCartClick(product)}
                className={`p-1.5 rounded-full transition ${
                  isInCart(product.id)
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-primary-color text-white hover:bg-secondary-color"
                }`}
              >
                {isInCart(product.id) ? (
                  <BsCheckCircleFill className="text-base" />
                ) : (
                  <BsCartPlus className="text-base" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscountProducts;
