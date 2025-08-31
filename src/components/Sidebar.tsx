import { Link, NavLink } from "react-router-dom";
import { SidebarLinks } from "../utils/SidebarLinks";
import { useSidebarStore } from "../features/store";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { useCartStore } from "../features/cartstore";
import MobileSidebar from "./MobileSidebar";
import { IoMdLogOut } from "react-icons/io";
import { useAuthStore } from "../features/useAuthStore";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { cart } = useCartStore();
  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const { logout } = useAuthStore();

  const isMobile = window.innerWidth < 640;

  if (isMobile) {
    return <MobileSidebar />;
  }

  return (
    <aside
      className={`h-screen bg-primary-color border-r border-gray-300 fixed top-0 left-0 z-20 transition-all duration-300
        ${isOpen ? "w-60" : "w-25"}`}
    >
      <div className="h-full flex flex-col relative">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 flex-shrink-0 relative">
          {isOpen ? (
            <Link
              to="/home"
              className="text-2xl font-bold text-white henny-penny-regular whitespace-nowrap"
            >
              Maverick Store
            </Link>
          ) : (
            <Link
              to="/home"
              className="text-2xl font-bold text-white henny-penny-regular whitespace-nowrap"
            >
              Mav
            </Link>
          )}

          <button
            className="ml-auto cursor-pointer absolute -right-5 top-6 bg-secondary-color rounded-full w-9 h-9 flex items-center justify-center shadow"
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <IoIosArrowDropleftCircle className="text-primary-color text-2xl" />
            ) : (
              <IoIosArrowDroprightCircle className="text-primary-color text-2xl" />
            )}
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-1 mt-4 custom-scrollbar">
          <div className="flex flex-col gap-y-4">
            {SidebarLinks.map(({ icon, name, id, path }) => {
              return (
                <NavLink
                  key={id}
                  to={path}
                  className={({ isActive }) =>
                    `block w-full transition-all duration-200 chillax ${
                      isActive
                        ? "bg-[#EFFCF2] text-primary-color font-bold border-r-4 border-secondary-color"
                        : "text-white hover:bg-secondary-color hover:text-primary-color"
                    }`
                  }
                >
                  <div
                    className={`relative flex items-center ${
                      isOpen
                        ? "gap-4 justify-start pl-6 sm:py-3 py-7 w-full"
                        : "justify-center sm:py-4 py-7 w-full"
                    }`}
                  >
                    <span className="text-[20px] relative">
                      {icon}
                      {name.toLowerCase() === "cart" && (
                        <span className="absolute -top-2 -right-2 flex items-center justify-center text-[10px] h-3 w-3 p-2  rounded-full text-red-700 font-bold bg-red-100">
                          {cartQuantity}
                        </span>
                      )}
                    </span>

                    {isOpen && (
                      <span className="text-[18px] font-semibold whitespace-nowrap">
                        {name}
                      </span>
                    )}
                  </div>
                </NavLink>
              );
            })}

            {/* Logout */}
            {isOpen ? (
              <div
                onClick={logout}
                className="flex justify-center items-center bg-white max-w-[250px] mx-auto px-9 py-2 mb-5 rounded-full gap-2 cursor-pointer"
              >
                <IoMdLogOut className="text-red-500 text-2xl" />
                <button className="font-medium text-gray-800">Logout</button>
              </div>
            ) : (
              <button
                onClick={logout}
                className="bg-white flex  w-[60px] self-center justify-center rounded-full py-2 mb-2 cursor-pointer"
              >
                <IoMdLogOut className="text-red-500 text-2xl" />
              </button>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
