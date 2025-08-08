import { useForm } from "react-hook-form";
import loginSvg from "../assets/images/login.svg";
import Form from "../utils/Form";
import CustomBtn from "../utils/CustomBtn";
import { type LoginValues } from "../types/formTypes";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [remember, setRemember] = useState(false);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log({ email, password, remember });
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>();

  const onSubmit = (data: LoginValues) => {
    console.log(data);
  };

  return (
    <section className="w-screen min-h-screen flex flex-col md:flex-row bg-white overflow-auto">
      {/* Left Side - Logo + Image */}
      <div className="relative w-full md:w-1/2 flex flex-col items-start justify-center gap-6 border-b md:border-b-0 md:border-r border-gray-100 px-15 pt-6 md:pt-0">
        <a
          href="/"
          className="text-primary-color henny-penny-regular font-semibold text-2xl md:text-3xl mb-15"
        >
          Maverick Store
        </a>

        <img
          src={loginSvg}
          alt="Login illustration"
          className="w-full max-w-[600px] h-auto object-contain"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6 py-8 pb-16 overflow-auto">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg bg-[#E9E5EE] py-9 pr-10"
        >
          {/* Heading */}
          <h2 className="md:text-3xl text-lg font-bold mb-4 text-primary-color text-left">
            Get Right Back In
          </h2>
          <p className="mb-6 text-left text-gray-800 font-semibold">
            Set up your account now to master your money for financial budgeting
            structure that works.
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

          {/* Password */}
          <div className="flex flex-col mb-4 text-left">
            <label
              htmlFor="password"
              className="mb-1 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              {...register("password", { required: "Password is required" })}
              className="px-3 py-2 border  border-primary-color bg-[#E8F0FE] rounded focus:outline-none focus:ring focus:border-primary-color"
            />
            {errors.password && (
              <p className="text-red-500 text-sm font-bold mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                {...register("remember")}
                className="form-checkbox accent-primary-color w-5 h-5"
              />
              Remember me
            </label>
            <a
              href="/forgot-password"
              className="text-primary-color text-[15px] font-bold"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <CustomBtn
            type="submit"
            className="w-full bg-primary-color text-white py-2 rounded-lg"
          >
            Continue
          </CustomBtn>

          {/* Bottom Link */}
          <div className="mt-6 text-center text-sm text-gray-800 md:text-[13px] font-light">
            Don’t have an account?
            <a
              href="/register"
              className="text-primary-color md:text-[15px] font-bold ml-2"
            >
              Create Account
            </a>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Login;
