import { useCartStore } from "../features/cartstore";

const OrderSummary = () => {
  const { cart } = useCartStore();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className=" p-4 space-y-4">
      <h2 className="text-lg font-bold border-b border-gray-300 pb-2">
        Order Summary ({totalItems} {totalItems === 1 ? "item" : "items"})
      </h2>

      <div className="space-y-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-gray-300 border-b pb-2"
          >
            <div>
              <p className="font-semibold text-sm">{item.name}</p>
              <p className="text-gray-500 text-xs">
                ₦{item.price.toFixed(2)} × {item.quantity}
              </p>
            </div>
            <p className="font-bold text-sm">
              ₦{(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center font-bold text-lg border-gray-300 border-t pt-2">
        <span>Total</span>
        <span>₦{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
