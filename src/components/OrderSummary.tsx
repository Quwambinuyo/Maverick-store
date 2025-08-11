import { FaTrash } from "react-icons/fa";

const OrderSummary = () => {
  const product = {
    id: 1,
    name: "Classic Navy Suit",
    image: "https://pbs.twimg.com/media/GxM84zwXcAQXqoU?format=jpg&name=large",
    price: 96,
    quantity: 1,
  };

  return (
    <div className="p-4 bg-white rounded shadow-sm space-y-4">
      <h2 className="text-lg font-semibold border-b border-primary-color pb-2">
        Order Summary
      </h2>

      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded"
        />

        {/* Details */}
        <div className="flex-1">
          <p className="text-sm font-medium">{product.name}</p>
          <p className="text-gray-500 text-sm">₦{product.price.toFixed(2)}</p>
        </div>

        {/* Quantity */}
        <input
          type="number"
          min={1}
          value={product.quantity}
          onChange={() => {}}
          className="w-16 border rounded p-1 text-center"
        />

        <button className="text-primary-color hover:text-secondary-color">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
