import { useParams } from "react-router-dom";
import { Products, DiscountedProduct } from "../data/ProductData";
import type { Product, ProductsType } from "../types/types";
import { formatPrice } from "../utils/utilityfunc";
import { useCartStore } from "../features/cartstore";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useMemo } from "react";

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { cart, addToCart, increment, decrement } = useCartStore();

  // Build combined product list with category info
  const allProducts: (Product & { categoryName: string })[] = useMemo(() => {
    const combined: (Product & { categoryName: string })[] = [];

    const addProductsWithCategory = (data: ProductsType, source: string) => {
      for (const categoryKey in data) {
        const category = data[categoryKey];
        for (const subKey in category) {
          combined.push(
            ...category[subKey].map((p) => ({
              ...p,
              categoryName: `${categoryKey} > ${subKey} (${source})`,
            }))
          );
        }
      }
    };

    addProductsWithCategory(Products as ProductsType, "Regular");
    addProductsWithCategory(DiscountedProduct as ProductsType, "Discounted");

    return combined;
  }, []);

  // Find product
  const product = allProducts.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">Product not found</h2>
    );
  }

  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-auto max-h-[300px] md:max-h-[400px] justify-self-center object-cover rounded-lg"
        />

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

          {/* Category */}
          <p className="text-sm text-gray-500 mb-2">
            Category: {product.categoryName}
          </p>

          {/* Price */}
          <p className="text-lg font-semibold text-green-600 mb-2">
            {formatPrice(product.discountPrice || product.price)}
          </p>
          {product.discountPrice && (
            <p className="text-sm text-gray-500 line-through">
              {formatPrice(product.price)}
            </p>
          )}

          {/* Description (optional) */}
          {product.description && (
            <p className="text-gray-700 mt-3">{product.description}</p>
          )}

          {/* Add to Cart / Quantity Controls */}
          {!cartItem ? (
            <button
              onClick={() => addToCart(product)}
              className="mt-4 px-6 py-2 bg-primary-color text-white rounded-lg"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => decrement(product.id)}
                className="p-2 bg-primary-color text-white rounded-full"
              >
                <FaMinus />
              </button>
              <span className="font-semibold">{cartItem.quantity}</span>
              <button
                onClick={() => increment(product.id)}
                className="p-2 bg-primary-color rounded-full text-white"
              >
                <FaPlus />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
