import { useSidebarStore } from "../features/store";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import CustomInput from "../utils/CustomInput";
import moment from "moment";
import { useAuthStore } from "../features/useAuthStore";
import { getSavedUserData } from "../utils/utils";
import { NavLink, useNavigate } from "react-router-dom";
import { PiHandWavingFill } from "react-icons/pi";
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
      {/* Navbar stacked in rows */}
      <nav className="flex justify-between bg-white px-4 py-3 shadow-lg w-full gap-3">
        {/* Row 1: Left (Greeting) */}
        <div className="flex items-center gap-2 min-w-0">
          <button
            onClick={toggleSidebar}
            className="sm:hidden text-primary-color text-3xl focus:outline-none"
          >
            {!isOpen && <RxHamburgerMenu />}
          </button>
          <span className="text-sm ml-2 roboto sm:inline capitalize md:text-lg text-primary-color font-semibold truncate">
            Hello, {user?.displayName?.split(" ")[0]}. {greeting}{" "}
          </span>
          <span className="text-primary-color">
            <PiHandWavingFill size={20} />
          </span>
        </div>

        {/* Row 2: Search (Desktop only) */}
        <div className="relative hidden sm:block ">
          <form onSubmit={handleSearch}>
            <CustomInput
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full pl-19 text-primary-color rounded-md font-semibold p-2 
             border-2 border-transparent focus:border-primary-color focus:ring-0 
             outline-none"
              placeholder="Search product..."
            />

            <button
              className="absolute left-0 bg-primary-color cursor-pointer top-1/2 transform -translate-y-1/2 text-white p-2 px-5 h-full  flex justify-center items-center text-xl"
              type="submit"
            >
              <AiOutlineSearch className="text-[25px]" />
            </button>
          </form>
        </div>

        {/* Row 3: Right (Icons) */}
        <div className="flex items-center justify-end gap-4 text-2xl text-gray-800">
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
      </nav>

      {/* Mobile Search (full width below navbar) */}
      <div className="block sm:hidden px-4 py-2 bg-white shadow-md">
        <form onSubmit={handleSearch} className="relative w-full">
          <CustomInput
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full pl-19 pr-3 py-2text-primary-color rounded-md font-semibold p-2 
             border border-transparent focus:border-primary-color focus:ring-0 
             outline-none"
            placeholder="Search product..."
          />
          <button
            className="absolute left-0 bg-primary-color cursor-pointer top-1/2 transform -translate-y-1/2 text-white p-2 px-5 h-full  flex justify-center items-center text-xl"
            type="submit"
          >
            <AiOutlineSearch className="text-[25px]" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
