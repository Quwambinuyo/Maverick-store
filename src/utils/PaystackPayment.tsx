import { useEffect } from "react";
import CustomBtn from "./CustomBtn";
import { toast } from "react-toastify";
import { useCartStore } from "../features/cartstore";

interface PaystackBtnType {
  totalPrice: number;
  clearFromCart: () => void;
  name: string;
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
  address,
  phone,
  country,
  logistic,
}: PaystackBtnType) {
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  // const {clearFromCart} = useCartStore()

  useEffect(() => {
    // Load Paystack inline script
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  // console.log(email);

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
        // navigate back to thank you page
        console.log("Payment successful:", response);
        clearFromCart();

        toast.success("Payment successful! Reference: " + response.reference);
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
