import { useEffect, useState } from "react";
import CustomBtn from "./CustomBtn";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Auth/firebaseconfig";
import { useSidebarStore } from "../features/store";
import type { CartItem } from "../types/cartTypes";
import SuccessfulModal from "../components/SuccessfulModal";
import { useNavigate } from "react-router-dom";

interface PaystackBtnType {
  totalPrice: number;
  clearFromCart: () => void;
  cart: CartItem[];
  name: string;
  userId: string;
  email: string;
  zipCode: string;
  phone: string;
  country: string;
  address: string;
  logistic: string;
}

export default function PaystackPayment({
  totalPrice,
  clearFromCart,
  email,
  name,
  address,
  userId,
  phone,
  cart,
  zipCode,
  country,
  logistic,
}: PaystackBtnType) {
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const { setLoading } = useSidebarStore();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const randomUid = Math.floor(Math.random() * 10000000 + 1);

  useEffect(() => {
    // Load Paystack inline script
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleOrderToStore = async (id: string) => {
    const data = {
      address,
      name,
      email,
      userId,
      phone,
      logistic,
      orderId: String(randomUid),
      amount: totalPrice,
      country,
      zipCode,
      cart,
      reference: id,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    try {
      setLoading(true);
      await setDoc(doc(db, "orders", String(randomUid)), data);

      clearFromCart();

      setShowModal(true);
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Something went wrong saving your order!");
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = () => {
    const handler = (window as any).PaystackPop.setup({
      key: publicKey,
      email,
      amount: totalPrice * 100,
      currency: "NGN",
      ref: `PSK-${Date.now()}`,
      metadata: {
        custom_fields: [
          { display_name: "address", variable_name: "address", value: address },
          { display_name: "phone", variable_name: "phone", value: phone },
          { display_name: "country", variable_name: "country", value: country },
          {
            display_name: "logistic",
            variable_name: "logistic",
            value: logistic,
          },
        ],
      },
      callback: (response: any) => {
        handleOrderToStore(response.reference);
      },
      onClose: () => {
        console.log("Payment window closed");
        toast.error("Transaction was not completed, window closed.");
      },
    });

    handler.openIframe();
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/home");
    window.location.reload();
  };

  return (
    <>
      <CustomBtn label="Payment" onClick={handlePayment} />
      <SuccessfulModal isOpen={showModal} onClose={handleCloseModal} />
    </>
  );
}
