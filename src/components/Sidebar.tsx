import { Link, NavLink } from "react-router-dom";
import { SidebarLinks } from "../utils/SidebarLinks";
import { useSidebarStore } from "../features/store";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { useCartStore } from "../features/cartstore";
import { motion } from "framer-motion";
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
    <motion.aside
      animate={{ width: isOpen ? 250 : 80 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 12,
      }}
      className={`h-screen bg-primary-color border-r border-gray-300 flex-shrink-0 fixed top-0 left-0 ${
        isOpen ? "block" : "hidden sm:block"
      } z-10`}
    >
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-5 flex-shrink-0">
          {isOpen ? (
            <Link
              to="/home"
              className="text-2xl font-bold text-white henny-penny-regular whitespace-nowrap"
            >
              Maverick Store
            </Link>
          ) : (
            ""
          )}
          <button
            className="items-center justify-center bg-transparent rounded-full w-8 h-8 flex-shrink-0 hidden sm:flex"
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <BsArrowLeftSquareFill className="text-secondary-color text-4xl drop-shadow-sm" />
            ) : (
              <BsArrowRightSquareFill className="text-secondary-color text-4xl drop-shadow-sm" />
            )}
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-1 mt-4 custom-scrollbar">
          <div className={`flex flex-col ${isOpen ? "gap-y-4" : "gap-y-6"}`}>
            {SidebarLinks.map(({ icon, name, id, path }) => {
              return (
                <NavLink
                  key={id}
                  to={path}
                  className={({ isActive }) =>
                    `block w-full transition-all duration-200 libre-baskerville-bold ${
                      isActive
                        ? "bg-[#EFFCF2] text-primary-color font-semibold border-r-4 border-secondary-color"
                        : "text-white hover:bg-secondary-color hover:text-primary-color"
                    }`
                  }
                >
                  <motion.div
                    whileHover={{
                      scale: 0.9,
                      transition: { duration: 0.3 },
                    }}
                    className={`relative flex items-center ${
                      isOpen
                        ? "gap-4 justify-start pl-6 sm:py-4 py-7 w-full"
                        : "justify-center sm:py-4 py-7 w-ful"
                    } `}
                  >
                    <span className="text-[20px] relative">
                      {icon}
                      {name.toLowerCase() === "cart" && (
                        <span className="absolute -top-2 -right-2 flex items-center justify-center text-[10px] h-3 w-3 p-2 rounded-full bg-red-200 text-red-600">
                          {cartQuantity}
                        </span>
                      )}
                    </span>

                    {isOpen && (
                      <span
                        className={`text-[18px] font-semibold whitespace-nowrap `}
                      >
                        {name}
                      </span>
                    )}
                  </motion.div>
                </NavLink>
              );
            })}

            {isOpen ? (
              <div
                onClick={logout}
                className="flex justify-center items-center bg-white max-w-[250px] mx-auto px-9 py-2 mb-5 rounded-full gap-2 cursor-pointer"
              >
                <IoMdLogOut className="text-red-500 text-3xl" />

                <button className="font-medium cursor-pointer ">Logout</button>
              </div>
            ) : (
              <button
                onClick={logout}
                className="bg-white flex justify-center rounded-full py-2 mb-2 cursor-pointer"
              >
                <IoMdLogOut className="text-red-500 text-3xl" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
