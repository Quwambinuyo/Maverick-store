import Form from "../utils/Form";
import OrderSummary from "../components/OrderSummary";
import CustomBtn from "../utils/CustomBtn";
import { useForm, type SubmitHandler } from "react-hook-form";

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

  const selectedLogistic = watch("logistic");

  const onSubmit: SubmitHandler<CheckoutFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* Left: Form */}
      <Form onSubmit={handleSubmit(onSubmit)} className="">
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
        <div className="flex items-center gap-4">
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
          <CustomBtn label="Proceed to Payment" />
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
