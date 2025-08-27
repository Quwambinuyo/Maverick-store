import Form from "../utils/Form";
import OrderSummary from "../components/OrderSummary";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useCartStore } from "../features/cartstore";
import PaystackPayment from "../utils/PaystackPayment";
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
  const { cart, clearFromCart, logisticPrice, setLogisticPrice } =
    useCartStore();

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

  const handleLogisticChange = (value: string) => {
    if (value === "DHL") setLogisticPrice(4500);
    else if (value === "FedEx") setLogisticPrice(5020);
    else setLogisticPrice(0);
  };

  const authUser = getAuth();
  const userId = authUser.currentUser?.uid;

  const selectedLogistic = watch("logistic");
  const email = watch("email");
  const address = watch("address");
  const country = watch("country");
  const logistic = watch("logistic");
  const zipCode = watch("zipCode");
  const phone = watch("phone");
  const name = watch("name");

  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-14">
      {/* Left: Form */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
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

        {/* Address */}
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

        {/* Phone */}
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

        {/* Zip & Country */}
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

        {/* Email */}
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

        {/* Logistic Options */}
        <p className="block text-sm font-medium mb-2">Choose Logistic</p>
        <div className="flex flex-col gap-4">
          {/* DHL */}
          <label
            className={`items-start gap-2 border max-w-[250px] text-nowrap pl-2 p-2 rounded-lg flex flex-col cursor-pointer
    ${
      selectedLogistic === "DHL"
        ? "border-green-700 text-green-700 font-bold"
        : "border-gray-300 text-gray-800"
    }
  `}
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                className="accent-green-700"
                value="DHL"
                {...register("logistic", {
                  required: "Please choose a logistic",
                  onChange: (e) => handleLogisticChange(e.target.value),
                })}
                checked={selectedLogistic === "DHL"}
              />
              <span>DHL Express</span>
              <p className="ml-2">₦4,500</p>
            </div>

            <h2 className="text-sm text-gray-900">
              Estimated Delivery: 2 Days
            </h2>
          </label>

          {/* FedEx */}
          <label
            className={`items-start gap-2 border max-w-[250px] text-nowrap pl-2 p-2 rounded-lg flex flex-col cursor-pointer
    ${
      selectedLogistic === "FedEx"
        ? "border-green-700 text-green-700 font-bold"
        : "border-gray-300 text-gray-800"
    }
  `}
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                className="accent-green-800"
                value="FedEx"
                {...register("logistic", {
                  required: "Please choose a logistic",
                  onChange: (e) => handleLogisticChange(e.target.value),
                })}
                checked={selectedLogistic === "FedEx"}
              />
              <span>FedEx</span>
              <p className="ml-2">₦5,020</p>
            </div>

            <h2 className="text-sm text-gray-900">
              Estimated Delivery: 3 Days
            </h2>
          </label>

          {errors.logistic && (
            <p className="text-red-500 text-sm">{errors.logistic.message}</p>
          )}

          {/* Payment Button */}
          <PaystackPayment
            totalPrice={totalPrice + logisticPrice}
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
