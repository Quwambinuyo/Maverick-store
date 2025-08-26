import Form from "../utils/Form";
import OrderSummary from "../components/OrderSummary";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useCartStore } from "../features/cartstore";
// import { toast } from "react-toastify";
import PaystackPayment from "../utils/PaystackPayment";
// import { auth } from "../Auth/firebaseconfig";
import { getAuth } from "firebase/auth";

type CheckoutFormData = {
  name: string;
  address: string;
  phone: string;
  zipCode: string;
  country: string;
  email: string;
  logistic: string;
};

const Checkout = () => {
  const { cart, clearFromCart } = useCartStore();

  // const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  // console.log(publicKey);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CheckoutFormData>({
    defaultValues: {
      name: "",
      address: "",
      phone: "",
      zipCode: "",
      country: "",
      email: "",
      logistic: "",
    },
  });

  const authUser = getAuth();
  const userId = authUser.currentUser?.uid;

  const selectedLogistic = watch("logistic");
  const email = watch("email");
  const address = watch("email");
  const country = watch("country");
  const logistic = watch("logistic");
  const zipCode = watch("zipCode");
  const phone = watch("phone");
  const name = watch("name");

  // const componentProps: any = {
  //   email: watch("email"),
  //   zipCode: watch("zipCode"),
  //   phone: watch("phone"),
  //   logistic: watch("logistic"),
  //   name: watch("name"),
  //   address: watch("address"),
  //   amount: totalPrice * 100,
  //   metadata: {
  //     name: "",
  //     phone: "",
  //   },
  //   publicKey,
  //   text: "Pay Now",
  //   onSuccess: () => {
  //     toast.success("Thanks for doing business with us! Come back soon!!");
  //     clearFromCart();
  //   },
  // };
  // console.log(componentProps, 3, "sdkhskdj");

  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-14">
      {/* Left: Form */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            {...register("name", { required: "Full Name is required" })}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            {...register("address", { required: "Address is required" })}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Zip Code</label>
            <input
              type="text"
              {...register("zipCode", { required: "Zip code is required" })}
              className="w-full border border-gray-300 rounded p-2"
            />
            {errors.zipCode && (
              <p className="text-red-500 text-sm">{errors.zipCode.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Country</label>
            <input
              type="text"
              {...register("country", { required: "Country is required" })}
              className="w-full border border-gray-300 rounded p-2"
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Email Address</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <p className="block text-sm font-medium mb-2">Choose Logistic</p>
        <div className="flex flex-col sm:flex  gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              className="accent-primary-color"
              value="DHL"
              {...register("logistic", {
                required: "Please choose a logistic",
              })}
              checked={selectedLogistic === "DHL"}
            />
            DHL Express
          </label>
          <label className="flex items-center gap-2">
            <input
              className="accent-primary-color"
              type="radio"
              value="FedEx"
              {...register("logistic", {
                required: "Please choose a logistic",
              })}
              checked={selectedLogistic === "FedEx"}
            />
            FedEx
          </label>
          {errors.logistic && (
            <p className="text-red-500 text-sm">{errors.logistic.message}</p>
          )}
          {/* <CustomBtn label="Proceed to Payment" type="submit" /> */}

          <PaystackPayment
            totalPrice={totalPrice}
            clearFromCart={clearFromCart}
            name={name}
            cart={cart}
            email={email}
            userId={userId as string}
            zipCode={zipCode}
            logistic={logistic}
            address={address}
            country={country}
            phone={phone}
          />
        </div>
      </Form>

      {/* Right: Order Summary */}
      <div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
