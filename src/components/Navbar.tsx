import { useSidebarStore } from "../features/store";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
// import { IoSunnySharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import CustomInput from "../utils/CustomInput";
import moment from "moment";
import { useAuthStore } from "../features/useAuthStore";
import { getSavedUserData } from "../utils/utils";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { user } = useAuthStore();
  const { userData } = getSavedUserData(user?.uid as string);

  const currentHour = moment().hour();
  const greeting =
    currentHour < 12
      ? "Good morning"
      : currentHour < 18
      ? "Good afternoon"
      : "Good evening";

  return (
    <nav className="flex items-center justify-between bg-white px-4 py-3 shadow-lg w-full gap-2">
      {/* Left: Hamburger + Greeting */}
      <div className="flex items-center gap-4 min-w-0">
        <button
          onClick={toggleSidebar}
          className="sm:hidden text-primary-color text-3xl focus:outline-none"
        >
          {!isOpen && <RxHamburgerMenu />}
        </button>
        <span className="text-sm roboto sm:inline capitalize md:text-lg text-primary-color font-semibold truncate">
          Hello, {user?.displayName?.split(" ")[0]}. {greeting} 👋
        </span>
      </div>

      {/* Middle: Search (slightly wider than greeting) */}
      <div className="relative hidden sm:block min-w-0">
        <CustomInput
          className="w-full pl-10 pr-3 py-2 border border-primary-color rounded-md"
          placeholder="Search product..."
        />
        <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-color text-xl" />
      </div>

      {/* Right: Icons (wrapped in a parent) */}
      <div className="flex items-center justify-end flex-[0.5]">
        <div className="flex items-center gap-4  sm:gap-7 text-2xl text-gray-800">
          <IoIosNotifications />
          {userData?.photoURL ? (
            <NavLink to="/profile">
              <img
                src={userData?.photoURL.base64}
                className="w-[25px] h-[25px] rounded-full object-cover"
                alt="User avatar"
              />
            </NavLink>
          ) : (
            <NavLink to="/profile">
              <h1 className="text-white  bg-primary-color rounded-full text-center w-[25px] h-[25px] text-sm items-center sm:text-[20px]">
                {user?.displayName?.charAt(0)}
              </h1>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
