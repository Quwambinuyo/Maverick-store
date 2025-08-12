import { FaQuestion } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { LuMessageCircleWarning } from "react-icons/lu";
import { SlNote } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { MdOutlineCallEnd } from "react-icons/md";
import { CiShoppingTag } from "react-icons/ci";
import { HiMiniUserGroup } from "react-icons/hi2";

const Pages = () => {
  return (
    <section className="">
      {/* <div className="bg-secondary-color flex justify-between rounded-lg items-center px-5 py-5">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-lg sm:text-2xl font-bold text-gray-900">
              Welcome,
            </p>
            <p className="text-lg sm:text-[25px] font-bold text-primary-color">
              Quwam
            </p>
          </div>
          <div>
            <h1 className="text-lg sm:text-[17px] font-semibold text-gray-700">
              Test@gmail.com
            </h1>
          </div>
        </div>
        <div className="bg-primary-color flex rounded-full justify-center items-center h-20 w-20">
          <h1 className="text-white text-lg sm:text-3xl">Q</h1>
        </div>
      </div> */}

      <article className="mt-5">
        <h2 className="mb-3 font-bold text-lg sm:text-[17px] text-gray-800">
          Pages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <NavLink
            to="/profile"
            className="bg-blue-500 text-white p-4 rounded shadow flex gap-4 items-center"
          >
            <div className="bg-blue-200 text-blue-500 p-4 rounded-full text-lg sm:text-[20px]">
              <IoPersonSharp />
            </div>
            <div className="text-lg sm:text-[17px] font-semibold">
              <h1>Profile</h1>
            </div>
          </NavLink>
          <NavLink
            to="/checkout"
            className="bg-rose-500 text-white p-4 rounded shadow flex gap-4 items-center"
          >
            <div className="bg-rose-200 text-rose-500 p-4 rounded-full text-lg sm:text-[20px]">
              <RiShoppingCartLine />
            </div>
            <div className="text-lg sm:text-[17px] font-semibold">
              <h1>Checkout</h1>
            </div>
          </NavLink>
          <NavLink
            to="/privacy"
            className="bg-gray-500 text-white p-4 rounded shadow flex gap-4 items-center"
          >
            <div className="bg-gray-200 text-gray-500 p-4 rounded-full text-lg sm:text-[20px]">
              <LuMessageCircleWarning />
            </div>
            <div className="text-lg sm:text-[17px] font-semibold">
              <h1>Privacy Policy</h1>
            </div>
          </NavLink>
          <NavLink
            to="/t&c"
            className="bg-green-500 text-white p-4 rounded shadow flex gap-4 items-center"
          >
            <div className="bg-green-200 text-green-500 p-4 rounded-full text-lg sm:text-[17px]">
              <SlNote />
            </div>
            <div className="text-lg sm:text-[17px] font-semibold">
              <h1>Terms & Condition</h1>
            </div>
          </NavLink>
          <NavLink
            to="/FAQ"
            className="bg-indigo-500 text-white p-4 rounded shadow flex gap-4 items-center"
          >
            <div className="bg-indigo-200 text-indigo-500 p-4 rounded-full text-lg sm:text-[17px]">
              <FaQuestion />
            </div>
            <div className="text-lg sm:text-[17px] font-semibold">
              <h1>FAQ</h1>
            </div>
          </NavLink>
          <NavLink
            to="/contact"
            className="bg-fuchsia-500 text-white p-4 rounded shadow flex gap-4 items-center"
          >
            <div className="bg-fuchsia-200 text-fuchsia-500 p-4 rounded-full text-lg sm:text-[17px]">
              <MdOutlineCallEnd />
            </div>
            <div className="text-lg sm:text-[17px] font-semibold">
              <h1>Contact Us</h1>
            </div>
          </NavLink>
          <NavLink
            to="/products"
            className="bg-lime-500 text-white p-4 rounded shadow flex gap-4 items-center"
          >
            <div className="bg-lime-200 text-lime-500 p-4 rounded-full text-lg sm:text-[17px]">
              <CiShoppingTag />
            </div>
            <div className="text-lg sm:text-[17px] font-semibold">
              <h1>Products</h1>
            </div>
          </NavLink>
          <NavLink
            to="/about"
            className="bg-stone-500 text-white p-4 rounded shadow flex gap-4 items-center"
          >
            <div className="bg-stone-200 text-stone-500 p-4 rounded-full text-lg sm:text-[17px]">
              <HiMiniUserGroup />
            </div>
            <div className="text-lg sm:text-[17px] font-semibold">
              <h1>About Us</h1>
            </div>
          </NavLink>
        </div>
      </article>
    </section>
  );
};

export default Pages;
