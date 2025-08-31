import { useForm } from "react-hook-form";
import regiserSvg from "../assets/images/register.svg";
import Form from "../utils/Form";
import CustomBtn from "../utils/CustomBtn";
import { type FormValues } from "../types/formTypes";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../features/useAuthStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Spinner from "../utils/spinner";

const Register = () => {
  const navigate = useNavigate();

  const { registerUser, loading, error, user } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const password = watch("password");

  const onSubmit = async (data: FormValues) => {
    await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    if (error) {
      toast.error(error, { position: "top-right" });
      return;
    }

    if (user) {
      toast.success("Account created successfully!", { position: "top-right" });
      reset();
      navigate("/home");
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-white overflow-y-auto">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col  items-start justify-center gap-6 border-b md:border-b-0 md:border-r border-gray-100 px-6 pt-6 md:pt-0">
        <NavLink
          to="/"
          className="text-primary-color henny-penny-regular font-semibold text-2xl md:text-3xl mb-4 md:mb-10"
        >
          Maverick Store
        </NavLink>
        <img
          src={regiserSvg}
          alt="Register illustration"
          className="w-full max-w-[600px] h-auto object-contain"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 px-6 py-10">
        <div className="w-full max-w-lg mx-auto">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-[#E9E5EE] p-8 rounded"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-color text-left">
              Create Account
            </h2>
            <p className="mb-6 text-left text-gray-800 font-semibold">
              Set up your account now to master your money speak volumes of your
              look.
            </p>

            {/* Name */}
            <div className="flex flex-col mb-4 text-left">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                type="name"
                id="name"
                placeholder="Quwam Bode"
                {...register("name", { required: "Name id Required" })}
                onKeyDown={(e) => {
                  if (e.key === "," || e.key === ".") {
                    e.preventDefault();
                  }
                }}
                className="px-3 py-2 border border-primary-color bg-[#E8F0FE] rounded focus:outline-none focus:ring focus:border-primary-color"
              />
              {errors.name && (
                <p className="text-red-500 text-sm font-bold mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col mb-4 text-left">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                {...register("email", { required: "Email must include @" })}
                className="px-3 py-2 border border-primary-color bg-[#E8F0FE] rounded focus:outline-none focus:ring focus:border-primary-color"
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-bold mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col mb-4 text-left">
              <label
                htmlFor="password"
                className="mb-1 font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    validate: {
                      hasUpper: (value) =>
                        /[A-Z]/.test(value) ||
                        "Must contain at least one uppercase letter",
                      hasLower: (value) =>
                        /[a-z]/.test(value) ||
                        "Must contain at least one lowercase letter",
                      hasSymbol: (value) =>
                        /[^A-Za-z0-9]/.test(value) ||
                        "Must contain at least one special character",
                    },
                  })}
                  className="px-3 py-2 pr-10 border border-primary-color bg-[#E8F0FE] rounded focus:outline-none focus:ring focus:border-primary-color w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </button>
              </div>

              {errors.password && (
                <div className="text-red-500 text-sm font-bold mt-2 space-y-1">
                  {errors.password.types?.hasUpper && (
                    <p>{errors.password.types.hasUpper}</p>
                  )}
                  {errors.password.types?.hasLower && (
                    <p>{errors.password.types.hasLower}</p>
                  )}
                  {errors.password.types?.hasSymbol && (
                    <p>{errors.password.types.hasSymbol}</p>
                  )}
                  {errors.password.message && <p>{errors.password.message}</p>}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col mb-4 text-left">
              <label
                htmlFor="confirm-password"
                className="mb-1 font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  placeholder="••••••••••••"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Password does not match",
                  })}
                  className="px-3 py-2 border border-primary-color bg-[#E8F0FE] rounded focus:outline-none focus:ring focus:border-primary-color w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm font-bold mt-2">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <CustomBtn
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center bg-primary-color h-[45px] text-white py-2 rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? <Spinner /> : "Proceed"}
            </CustomBtn>

            <div className="mt-6 text-start text-sm text-gray-800 md:text-[17px] font-light">
              Already have an account?
              <NavLink
                to="/login"
                className="text-primary-color md:text-[17px] font-bold ml-2"
              >
                Login
              </NavLink>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Register;
