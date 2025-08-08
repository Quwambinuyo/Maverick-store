import { useState } from "react";
import regiserSvg from "../assets/images/register.svg";
import Form from "../utils/Form";
import CustomBtn from "../utils/CustomBtn";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <section className="w-screen h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Left Side - Static */}
      <div className="relative w-full md:w-1/2 flex flex-col items-start justify-center gap-6 border-b md:border-b-0 md:border-r border-gray-100 px-10 pt-6 md:pt-0 overflow-hidden">
        <a
          href="/"
          className="text-primary-color henny-penny-regular font-semibold text-2xl md:text-3xl mb-10"
        >
          Maverick Store
        </a>

        <img
          src={regiserSvg}
          alt="Login illustration"
          className="w-full max-w-[600px] h-auto object-contain"
        />
      </div>

      {/* Right Side - Scrollable Form */}
      <div className="w-full md:w-1/2 h-screen overflow-y-auto px-6 py-10">
        <div className="w-full max-w-lg mx-auto">
          <Form
            onSubmit={handleSubmit}
            className="w-full bg-[#E9E5EE] p-8 rounded"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-color text-left">
              Create Account
            </h2>
            <p className="mb-6 text-left text-gray-800 font-semibold">
              Set up your account now to master your money speak volumes of your
              look.
            </p>

            {/* Email */}
            <div className="flex flex-col mb-4 text-left">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 border border-primary-color bg-[#E8F0FE] rounded focus:outline-none focus:ring focus:border-primary-color"
              />
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
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 border border-primary-color bg-[#E8F0FE] rounded focus:outline-none focus:ring focus:border-primary-color"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col mb-4 text-left">
              <label
                htmlFor="confirm-password"
                className="mb-1 font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 border border-primary-color bg-[#E8F0FE] rounded focus:outline-none focus:ring focus:border-primary-color"
              />
            </div>

            {/* Submit Button */}
            <CustomBtn
              type="submit"
              className="w-full bg-primary-color text-white font-semibold py-3 mt-5 rounded-lg"
            >
              Proceed
            </CustomBtn>

            {/* Bottom Link */}
            <div className="mt-6 text-start text-sm text-gray-800 md:text-[17px] font-light">
              Already have an account?
              <a
                href="/login"
                className="text-primary-color md:text-[17px] font-bold ml-2"
              >
                Login
              </a>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Register;
