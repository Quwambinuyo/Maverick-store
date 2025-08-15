import { useCartStore } from "../features/cartstore";
import { FaPlus, FaMinus } from "react-icons/fa";
import CustomBtn from "../utils/CustomBtn";
import { formatPrice } from "../utils/utilityfunc";
import emptycart from "../assets/images/emptycart.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, increment, decrement, removeFromCart } = useCartStore();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center text-center font-semibold">
        <div className="flex flex-col items-center">
          <img src={emptycart} alt="" className="w-1/3 h-1/3" />
          <p className="text-lg md:text-[20px] text-primary-color mt-6 capitalize">
            cart is empty
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="mx-auto p-4 space-y-4">
      <h2 className="text-lg sm:text-2xl font-bold mb-4">Your Cart</h2>

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {cart.map((item) => {
          const discount = item.discountPercent ?? 0;
          const isDiscounted = discount > 0;
          const originalPrice = isDiscounted
            ? item.price / (1 - discount / 100)
            : item.price;

          return (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-white shadow rounded-lg p-3 relative"
            >
              {/* Image + name + price */}
              <div className="flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {item.name}
                  </h3>

                  {isDiscounted ? (
                    <div className="text-xs sm:text-sm">
                      <span className="text-primary-color font-bold mr-2">
                        {formatPrice(item.price)}
                      </span>
                      <span className="text-gray-400 line-through">
                        {formatPrice(originalPrice)}
                      </span>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Price: ₦{item.price.toFixed(2)}
                    </p>
                  )}

                  <p className="font-bold text-sm text-primary-color">
                    Total: {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center justify-between mt-3">
                {isDiscounted ? (
                  <span className="text-sm text-green-500">
                    Limited quantity due to discount
                  </span>
                ) : (
                  <div className="flex items-center space-x-2">
                    <CustomBtn
                      onClick={() => decrement(item.id)}
                      className="flex items-center justify-center rounded-full bg-gray-200"
                    >
                      <FaMinus className="text-xs" />
                    </CustomBtn>

                    <span className="font-bold">{item.quantity}</span>

                    <CustomBtn
                      onClick={() => increment(item.id)}
                      className="flex items-center justify-center bg-primary-color text-white rounded-full"
                    >
                      <FaPlus className="text-xs" />
                    </CustomBtn>
                  </div>
                )}

                {/* Remove button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart total + checkout */}
      <div className="text-right mt-4">
        <p className="font-bold text-lg mb-3">
          Total: {formatPrice(totalAmount)}
        </p>

        <Link
          to="/checkout"
          className="bg-primary-color hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-colors"
        >
          Proceed to Checkout
        </Link>
      </div>
    </section>
  );
};

export default Cart;
