import React from "react";
import { useParams } from "react-router-dom";
import { Products, DiscountedProduct } from "../data/ProductData";
import type { Product, ProductsType } from "../types/types";
import { formatPrice } from "../utils/utilityfunc";
import { useCartStore } from "../features/cartstore";

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCartStore();

  // Combine Products + DiscountedProduct into one array
  const allProducts: Product[] = [];

  const typedProducts = Products as ProductsType;
  const typedDiscounted = DiscountedProduct as ProductsType;

  // Add regular products
  for (const categoryKey in typedProducts) {
    const category = typedProducts[categoryKey];
    for (const subKey in category) {
      allProducts.push(...category[subKey]);
    }
  }

  // Add discounted products
  for (const categoryKey in typedDiscounted) {
    const category = typedDiscounted[categoryKey];
    for (const subKey in category) {
      allProducts.push(...category[subKey]);
    }
  }

  // Find product by id
  const product = allProducts.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">Product not found</h2>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover rounded-lg"
        />

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg font-semibold text-green-600 mb-4">
            {formatPrice(product.discountPrice || product.price)}
          </p>
          {product.discountPrice && (
            <p className="text-sm text-gray-500 line-through">
              {formatPrice(product.price)}
            </p>
          )}
          <button
            onClick={() => addToCart(product)}
            className="mt-4 px-6 py-2 bg-primary-color text-white rounded-lg "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
