// Navbar.tsx
import { useSidebarStore } from "../features/store";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import CustomInput from "../utils/CustomInput";
import moment from "moment";
import { useAuthStore } from "../features/useAuthStore";
import { getSavedUserData } from "../utils/utils";
import { NavLink, useSearchParams } from "react-router-dom";
import type React from "react";

const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { user } = useAuthStore();
  const { userData } = getSavedUserData(user?.uid as string);
  const [query, setQuery] = useSearchParams();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.get("q") || "";
    if (q !== "") {
      // setLoading(true);
      setQuery({ q });
      // setTimeout(() => setLoading(false), 500);
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
    <nav className="flex items-center justify-between bg-white px-4 py-3 shadow-lg w-full gap-2">
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

      {/* Middle: Search */}
      <div className="relative hidden sm:block min-w-0">
        <form onSubmit={handleSearch}>
          <CustomInput
            value={query.get("q") || ""}
            onChange={(e) => setQuery({ q: e.target.value })}
            className="w-full pl-10 pr-3 py-2 border-b border-primary-color rounded-none focus:outline-none"
            placeholder="Search product..."
          />
          <button
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-color text-xl"
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

      {/* {loading && (
        <div className="absolute top-[60px] left-0 w-full text-center bg-yellow-100 py-2 text-yellow-700 text-sm">
          Searching products...
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
