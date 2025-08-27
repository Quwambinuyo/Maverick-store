import { useSidebarStore } from "../features/store";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import CustomInput from "../utils/CustomInput";
import moment from "moment";
import { useAuthStore } from "../features/useAuthStore";
import { getSavedUserData } from "../utils/utils";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { user } = useAuthStore();
  const { userData } = getSavedUserData(user?.uid as string);

  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(q.trim())}`);
    }
  };

  const currentHour = moment().hour();
  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good evening";

  return (
    <>
      {/* Top Navbar */}
      <nav className="flex items-center justify-between bg-[#E7EFC7] px-4 py-3 shadow-lg w-full gap-2">
        {/* Left */}
        <div className="flex items-center gap-4 min-w-0">
          <button
            onClick={toggleSidebar}
            className="sm:hidden text-primary-color text-3xl focus:outline-none"
          >
            {!isOpen && <RxHamburgerMenu />}
          </button>
          <span className="text-sm ml-5 roboto sm:inline capitalize md:text-lg text-primary-color font-semibold truncate">
            Hello, {user?.displayName?.split(" ")[0]}. {greeting} 👋
          </span>
        </div>

        {/* Middle: Search (Desktop only) */}
        <div className="relative hidden sm:block lg:min-w-[600px]">
          <form onSubmit={handleSearch}>
            <CustomInput
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full pl-10  pr-3 py-2 border-b border-primary-color rounded-none focus:outline-none"
              placeholder="Search product..."
            />
            <button
              className="absolute left-3 cursor-pointer top-1/2 transform -translate-y-1/2 text-primary-color text-xl"
              type="submit"
            >
              <AiOutlineSearch />
            </button>
          </form>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end ">
          <div className="flex items-center gap-4 sm:gap-7 text-2xl text-gray-800">
            <IoIosNotifications />
            {userData?.photoURL ? (
              <NavLink to="/profile">
                <img
                  src={userData?.photoURL.base64}
                  className="sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] rounded-full object-cover"
                  alt="User avatar"
                />
              </NavLink>
            ) : (
              <NavLink to="/profile">
                <h1 className="text-white flex justify-center bg-primary-color rounded-full text-center w-[25px] h-[25px] text-sm items-center sm:text-[20px]">
                  {user?.displayName?.charAt(0)}
                </h1>
              </NavLink>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Search (Full width below navbar) */}
      <div className="block sm:hidden px-4 py-2 bg-white shadow-md">
        <form onSubmit={handleSearch} className="relative w-full">
          <CustomInput
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-primary-color rounded-md focus:outline-none"
            placeholder="Search product..."
          />
          <button
            className=" cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-color text-xl"
            type="submit"
          >
            <AiOutlineSearch />
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
