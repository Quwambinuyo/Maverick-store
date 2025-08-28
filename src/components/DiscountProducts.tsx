import { DiscountedProduct } from "../data/ProductData";
import type { Product, ProductsType } from "../types/types";
import { BsCheckCircle } from "react-icons/bs";
import { IoBagAdd } from "react-icons/io5";
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
  const q = qRaw.trim().toLowerCase();

  const filteredProducts = q
    ? allProducts.filter((p) => {
        const name = p.name.toLowerCase();
        const qLetters = q.replace(/\s+/g, "");
        const regex = new RegExp(qLetters.split("").join(".*"), "i");
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

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-600 font-medium py-10">
          No discounted products found for "{qRaw}"
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 xl:grid-cols-4 sm:gap-4 px-2 pb-20">
          {filteredProducts.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            const price = Number(product.price ?? 0);
            const discountPercent = Number(product.discountPercent ?? 0);
            const discountPrice = price - (price * discountPercent) / 100;
            const percentOff =
              price > 0
                ? Math.round(((price - discountPrice) / price) * 100)
                : 0;
            const isInCart = !!cartItem;

            return (
              <Link
                to={`/singleProduct/${product.id}`}
                key={product.id}
                className="p-3 rounded-md shadow relative bg-white flex flex-col md:h-[300px]"
              >
                {/* Percent-off badge */}
                {percentOff > 0 && (
                  <div className="absolute top-7 left-5 bg-secondary-color text-primary-color text-xs px-2 py-1 rounded font-semibold">
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

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      isInCart
                        ? removeFromCart(product.id)
                        : addToCart(product);
                    }}
                    className={`p-2 rounded-full font-medium transition-colors duration-300 flex items-center gap-1 ${
                      isInCart
                        ? "bg-green-800 text-white"
                        : " text-primary-color hover:text-white hover:bg-primary-color"
                    }`}
                  >
                    {isInCart ? (
                      <BsCheckCircle className="text-[20px]" />
                    ) : (
                      <IoBagAdd className="text-[20px]" />
                    )}
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default DiscountProducts;
