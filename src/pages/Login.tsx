import { useForm } from "react-hook-form";
import loginSvg from "../assets/images/login.svg";
import Form from "../utils/Form";
import CustomBtn from "../utils/CustomBtn";
import { NavLink, useNavigate } from "react-router-dom";
import { type LoginValues } from "../types/formTypes";
import { useAuthStore } from "../features/useAuthStore";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import LoadingSpinner from "../components/LoadingSpinner";

const Login = () => {
  const { login, setRememberMe } = useAuthStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>();

  const onSubmit = async (data: LoginValues) => {
    setLoading(true);
    setErrorMsg("");
    const res = await login(data.email, data.password, data.remember || false);
    setLoading(false);

    if (res.error) {
      setErrorMsg(res.error);
      if (res.error === "Something went wrong") {
        setErrorMsg("Please check your internet");
      }
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <section className="w-screen min-h-screen flex flex-col md:flex-row bg-white overflow-auto">
      {/* Left Side */}
      <div className="relative w-full md:w-1/2 flex flex-col items-start justify-center gap-6 border-b md:border-b-0 md:border-r border-gray-100 px-15 pt-6 md:pt-0">
        <NavLink
          to="/"
          className="text-primary-color henny-penny-regular font-semibold text-2xl md:text-3xl mb-4 md:mb-10"
        >
          Maverick Store
        </NavLink>
        <img
          src={loginSvg}
          alt="Login illustration"
          className="w-full max-w-[600px]"
        />
      </div>

      {/* Right Side */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6 py-8 pb-16 overflow-auto">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg bg-[#E9E5EE] py-9 pr-10"
        >
          <h2 className="md:text-3xl text-lg font-bold mb-4 text-primary-color text-left">
            Get Right Back In
          </h2>
          <p className="mb-6 text-left text-gray-800 font-semibold">
            Set up your account now to master your money for financial
            budgeting.
          </p>

          {errorMsg && (
            <p className="text-red-500 text-sm font-bold mb-4">{errorMsg}</p>
          )}

          {/* Email */}
          <div className="flex flex-col mb-4 text-left">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="px-3 py-2 border border-primary-color bg-[#E8F0FE] rounded"
              placeholder="quwam@maverick.com"
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
                placeholder="••••••••••"
                {...register("password", { required: "Password is required" })}
                className="px-3 py-2 pr-10 border border-primary-color bg-[#E8F0FE] rounded w-full"
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
              <p className="text-red-500 text-sm font-bold mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("remember")}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="form-checkbox accent-primary-color w-5 h-5"
              />
              Remember me
            </label>
            <NavLink
              to="/forgot-password"
              className="text-primary-color font-bold"
            >
              Forgot password?
            </NavLink>
          </div>

          {/* Submit Button */}
          <CustomBtn
            type="submit"
            disabled={loading}
            className={`w-full bg-primary-color text-white py-2 rounded-lg ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? <LoadingSpinner /> : "Continue"}
          </CustomBtn>

          {/* Sign Up Link */}
          <div className="mt-6 text-center text-sm text-gray-800 font-light">
            Don’t have an account?
            <NavLink
              to="/register"
              className="text-primary-color font-bold ml-2"
            >
              Create Account
            </NavLink>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Login;
