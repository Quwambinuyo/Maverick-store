import { useForm } from "react-hook-form";
import loginSvg from "../assets/images/login.svg";
import Form from "../utils/Form";
import CustomBtn from "../utils/CustomBtn";
import { type LoginValues } from "../types/formTypes";
import { NavLink } from "react-router-dom";
import {} from "firebase/auth";
import { useAuthStore } from "../features/useAuthStore";
import Spinner from "../utils/spinner";
// import { useState } from "react";

const ForgotPassword = () => {
  const { passwordResetLink, loading } = useAuthStore();
  // const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginValues>();

  const emailValue = watch("email", "");

  const handleReset = async () => {
    await passwordResetLink(emailValue);
  };

  return (
    <section className="w-screen min-h-screen flex flex-col md:flex-row bg-white overflow-auto">
      {/* Left Side - Logo + Image */}
      <div className="relative w-full md:w-1/2 flex flex-col items-start justify-center gap-6 border-b md:border-b-0 md:border-r border-gray-100 px-15 pt-6 md:pt-0">
        <NavLink
          to="/"
          className="text-primary-color henny-penny-regular font-semibold text-2xl md:text-3xl mb-15"
        >
          Maverick Store
        </NavLink>

        <img
          src={loginSvg}
          alt="Login illustration"
          className="w-full max-w-[600px] h-auto object-contain"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6 py-8 pb-16 overflow-auto">
        <Form
          onSubmit={handleSubmit(handleReset)}
          className="w-full max-w-lg bg-[#E9E5EE] py-9 pr-10"
        >
          {/* Heading */}
          <h2 className="md:text-3xl text-lg font-bold mb-4 text-primary-color text-left">
            Forgot Password
          </h2>
          <p className="mb-6 text-left text-gray-800 font-semibold">
            Enter your details to reset your password
          </p>

          {/* Email */}
          <div className="flex flex-col mb-4 text-left">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              {...register("email", { required: "Email is required" })}
              className="px-3 py-2 border border-primary-color bg-[#E8F0FE] rounded focus:outline-none focus:ring focus:border-primary-color"
            />
            {errors.email && (
              <p className="text-red-500 text-sm font-bold mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <CustomBtn
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center bg-primary-color h-[45px] text-white py-2 rounded-lg ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? <Spinner /> : "Continue"}
          </CustomBtn>

          <div className="flex justify-center">
            <NavLink to="/login" className="text-primary-color font-bold">
              Back
            </NavLink>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ForgotPassword;
