import { useSidebarStore } from "../features/store";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import CustomInput from "../utils/CustomInput";
import moment from "moment";

const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

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
      <div className="flex items-center gap-4 flex-[1] min-w-0">
        <button
          onClick={toggleSidebar}
          className="sm:hidden text-primary-color text-3xl focus:outline-none"
        >
          {!isOpen && <RxHamburgerMenu />}
        </button>
        <span className="text-sm sm:inline md:text-lg text-primary-color font-semibold truncate">
          Hello, Quwam. {greeting} 👋
        </span>
      </div>

      {/* Middle: Search (slightly wider than greeting) */}
      <div className="relative flex-[1.2] hidden sm:block min-w-0">
        <CustomInput
          className="w-full pl-10 pr-3 py-2 border border-primary-color rounded-md"
          placeholder="Search product..."
        />
        <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-color text-xl" />
      </div>

      {/* Right: Icons (wrapped in a parent) */}
      <div className="flex items-center justify-end flex-[0.5]">
        <div className="flex items-center gap-6 text-2xl text-gray-800">
          <IoIosNotifications />
          <IoSunnySharp />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
