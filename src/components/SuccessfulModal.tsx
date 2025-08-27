import { motion } from "framer-motion";
import SuccessGif from "../assets/images/Success.mp4";

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SuccessfulModal({
  isOpen,
  onClose,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9999]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl shadow-xl p-6 text-center max-w-sm w-full z-[10000]"
      >
        <video
          src={SuccessGif}
          autoPlay
          loop
          muted
          playsInline
          className="w-40 h-40 mx-auto rounded-lg"
        />
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          🎉 Thank You!
        </h2>
        <p className="text-gray-600 mb-4">
          Thanks for shopping with us. Your order has been placed successfully.
        </p>
        <button
          onClick={onClose}
          className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
