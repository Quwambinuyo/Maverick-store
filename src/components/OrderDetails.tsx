import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { formatPrice } from "../utils/utilityfunc";
import { useEffect } from "react";

type OrderItem = {
  name: string;
  quantity: number;
  price: number;
};

type OrderModalProps = {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  placedAt: string;
  customer: string;
  phone: string;
  address: string;
  items: OrderItem[];
};

export default function OrderDetailsModal({
  isOpen,
  onClose,
  orderId,
  placedAt,
  customer,
  phone,
  address,
  items,
}: OrderModalProps) {
  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0  flex items-center justify-center bg-black/50 z-[9999]"
    >
      {/* Close button outside the card */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-gray-900 rounded-full text-3xl hover:text-gray-300"
      >
        <IoMdClose />
      </button>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        className="bg-white clip-zigzag rounded-2xl shadow-2xl w-full max-w-[90%] md:max-w-[50%] flex flex-col relative"
      >
        {/* Header */}
        <div className="p-4 border-b inter border-primary-color border-dashed bg-primary-color text-white">
          <h2 className="text-lg font-bold  ">Order #{orderId}</h2>
          <p className="text-xs">Placed: {placedAt}</p>
        </div>

        <div className="flex-1  p-4 space-y-4 scrollbar-hide receipt">
          {/* Customer Info */}
          <div className="text-sm text-black space-y-1 libre-baskerville-regular ">
            <p>
              <span className="font-semibold">Customer:</span> {customer}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {phone}
            </p>
            <p>
              <span className="font-semibold">Address:</span> {address}
            </p>
          </div>

          {/* Items */}
          <div>
            <h3 className="font-semibold  text-black mb-2">Items Ordered:</h3>
            <div className="divide-y-1 divide-primary-color divide-dotted  rounded-lg border-1 border-dotted border-primary-color roboto">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between py-2 px-3 text-sm text-black"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t nanum-gothic-regular bg-white text-black border-primary-color border-dashed p-4 flex justify-between items-center">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-bold ">{formatPrice(total)}</span>
        </div>
      </motion.div>
    </div>
  );
}
