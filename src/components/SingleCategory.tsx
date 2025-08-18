import { useNavigate, useParams } from "react-router-dom";
import { Products } from "../data/ProductData";
import type { Product, ProductsType } from "../types/types";
import { formatPrice } from "../utils/utilityfunc";

const SingleCategory = () => {
  const { category, subCategory } = useParams<{
    category: string;
    subCategory?: string;
  }>();

  const navigate = useNavigate();

  const typedProducts = Products as ProductsType;

  let filteredProducts: Product[] = [];

  if (category && typedProducts[category]) {
    if (subCategory && typedProducts[category][subCategory]) {
      filteredProducts = typedProducts[category][subCategory];
    } else {
      filteredProducts = Object.values(typedProducts[category]).flat();
    }
  }

  return (
    <section>
      <div className="max-w-screen mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">
          {category} {subCategory ? `- ${subCategory}` : ""}
        </h2>
        {filteredProducts.length === 0 ? (
          <p>No Products Found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                onClick={() => navigate(`/singleProduct/${product.id}`)}
                key={product.id}
                className="border border-gray-500 rounded-lg shadow-sm p-3 cursor-pointer bg-white hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-contain rounded-md"
                />

                <h3 className="mt-2 font-semibold">{product.name}</h3>
                <p className="text-primary-color font-semibold">
                  {formatPrice(product.price)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SingleCategory;
