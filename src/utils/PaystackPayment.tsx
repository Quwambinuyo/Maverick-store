import { useEffect } from "react";
import CustomBtn from "./CustomBtn";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Auth/firebaseconfig";
import { useSidebarStore } from "../features/store";
import type { CartItem } from "../types/cartTypes";
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

  useEffect(() => {
    // Load Paystack inline script
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const randomUid = Math.floor(Math.random() * 10000000 + 1);
  const { setLoading } = useSidebarStore();
  // console.log(randomUid);

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

    console.log(id, data);

    try {
      // const response = await setDoc(doc(db, "orders", data.orderId), data);
      const response = await setDoc(doc(db, "orders", String(randomUid)), data);
      setLoading(true);
      console.log(response);
      toast.success("Order placed successfully!");
      clearFromCart();
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = () => {
    const handler = (window as any).PaystackPop.setup({
      key: publicKey, // from .env
      email,
      // phone: phone,
      // logistic: logistic,
      // address: address,
      // country: country,
      amount: totalPrice * 100, // Paystack expects amount in kobo
      currency: "NGN",
      ref: `PSK-${Date.now()}`, // unique transaction reference
      metadata: {
        custom_fields: [
          {
            display_name: "address",
            variable_name: "address",
            value: address,
          },
          {
            display_name: "phone",
            variable_name: "phone",
            value: phone,
          },
          {
            display_name: "coutry",
            variable_name: "country",
            value: country,
          },
          {
            display_name: "logistic",
            variable_name: "logostic",
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

  return <CustomBtn label="Payment" onClick={handlePayment} />;
}
