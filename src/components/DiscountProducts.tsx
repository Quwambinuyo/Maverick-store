import { DiscountedProduct } from "../data/ProductData";
import type { Product, ProductsType } from "../types/types";
import { BsCartPlus, BsCheckCircle } from "react-icons/bs";
import { useCartStore } from "../features/cartstore";
import { formatPrice } from "../utils/utilityfunc";
import { Link, useSearchParams } from "react-router-dom";

const DiscountProducts = () => {
  const allProducts: Product[] = [];
  const typedProducts = DiscountedProduct as ProductsType;

  // Flatten products from categories
  for (const categoryKey in typedProducts) {
    const category = typedProducts[categoryKey];
    for (const subKey in category) {
      const productsArray = category[subKey];
      allProducts.push(...productsArray);
    }
  }

  const { cart, addToCart, removeFromCart } = useCartStore();

  const [searchParams] = useSearchParams();
  const qRaw = String(searchParams.get("q") ?? "");
  const q = qRaw.replace(/^\s+|\s+$/g, "").toLowerCase();

  // Flexible search
  const filteredProducts = q
    ? allProducts.filter((p) => {
        const name = p.name.toLowerCase();

        // 1. Remove spaces from query
        const qLetters = q.replace(/\s+/g, "");

        // 2. Regex for sequential letter match (e.g. "nik" -> n.*i.*k)
        const regex = new RegExp(qLetters.split("").join(".*"), "i");

        // 3. Word-based match (e.g. "max air" finds "Nike Air Max")
        const words = q.split(/\s+/);
        const wordMatch = words.every((word) => name.includes(word));

        return regex.test(name) || wordMatch;
      })
    : allProducts;

  return (
    <section>
      <div className="sm:w-[500px] w-[90%] text-center flex flex-col justify-center mx-auto py-3 space-y-3.5 mb-4">
        <h2 className="text-sm font-bold sm:text-2xl">Discounted Products</h2>
        <p className="text-sm sm:text-[15px] font-semibold text-gray-800">
          Grab these deals before they expire! Enjoy discounted prices on
          selected products.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 xl:grid-cols-4 sm:gap-4 px-2 pb-20">
        {filteredProducts.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          const price = Number(product.price ?? 0);
          const discountPercent = Number(product.discountPercent ?? 0);
          const discountPrice = price - (price * discountPercent) / 100;
          const percentOff =
            price > 0 ? Math.round(((price - discountPrice) / price) * 100) : 0;
          const isInCart = !!cartItem;

          return (
            <Link
              to={`/singleProduct/${product.id}`}
              key={product.id}
              className="p-3 rounded-md shadow relative bg-white flex flex-col md:h-[300px]"
            >
              {/* Percent-off badge */}
              {percentOff > 0 && (
                <div className="absolute top-7 left-5 bg-red-200 text-red-500 text-xs px-2 py-1 rounded font-semibold">
                  {percentOff}% OFF
                </div>
              )}

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 sm:h-48 object-contain rounded mb-3"
              />

              {/* Product Name */}
              <h2 className="text-xs sm:text-sm font-semibold line-clamp-1 mb-2">
                {product.name}
              </h2>

              {/* Price & Cart Button */}
              <div className="flex items-center justify-between">
                {/* Price section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <span className="text-primary-color font-bold text-sm sm:text-base">
                    {formatPrice(discountPrice)}
                  </span>
                  {percentOff > 0 && (
                    <span className="text-gray-500 line-through text-xs sm:text-sm">
                      {formatPrice(price)}
                    </span>
                  )}
                </div>

                {/* Add / Remove Cart button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    isInCart ? removeFromCart(product.id) : addToCart(product);
                  }}
                  className={`p-2 rounded-full font-medium transition-colors duration-300 flex items-center gap-1 ${
                    isInCart
                      ? "bg-green-500 text-white"
                      : "bg-primary-color text-white hover:bg-secondary-color"
                  }`}
                >
                  {isInCart ? (
                    <BsCheckCircle size={18} />
                  ) : (
                    <BsCartPlus size={18} />
                  )}
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default DiscountProducts;
