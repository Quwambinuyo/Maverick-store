import { Link, NavLink } from "react-router-dom";
import { SidebarLinks } from "../utils/SidebarLinks";
import { useSidebarStore } from "../features/store";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { useCartStore } from "../features/cartstore";
import { motion } from "framer-motion";
import MobileSidebar from "./MobileSidebar";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { cart } = useCartStore();
  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isMobile = window.innerWidth < 640;

  if (isMobile) {
    return <MobileSidebar />;
  }

  return (
    <motion.aside
      animate={{ width: isOpen ? 240 : 80 }}
      transition={{
        type: "spring",
        stiffness: 600,
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
            <span className="flex-1" />
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
              const isLogout = name.toLowerCase() === "logout";
              return (
                <NavLink
                  key={id}
                  to={path}
                  className={({ isActive }) =>
                    `block w-full transition-all duration-200 libre-baskerville-bold ${
                      isLogout
                        ? "text-red-500"
                        : isActive
                        ? "bg-[#EFFCF2] text-primary-color font-semibold border-r-4 border-secondary-color"
                        : "text-white hover:bg-secondary-color hover:text-primary-color"
                    }`
                  }
                >
                  <div
                    className={`relative flex items-center ${
                      isOpen ? "gap-4 justify-start pl-6" : "justify-center"
                    } ${
                      isLogout
                        ? "bg-white mt-9 mb-6 rounded-full px-5 py-4 w-fit mx-auto"
                        : "sm:py-4 py-7 w-full"
                    }`}
                  >
                    <motion.span
                      whileHover={{
                        rotate: [0, -10, 10, -10, 10, 0],
                        transition: { duration: 0.5 },
                      }}
                      className="text-[20px] relative"
                    >
                      {icon}
                      {name.toLowerCase() === "cart" && (
                        <span className="absolute -top-2 -right-2 flex items-center justify-center text-[10px] h-3 w-3 p-2 rounded-full bg-red-200 text-red-600">
                          {cartQuantity}
                        </span>
                      )}
                    </motion.span>

                    {isOpen && (
                      <span
                        className={`text-[18px] font-semibold whitespace-nowrap ${
                          isLogout ? "text-red-500" : ""
                        }`}
                      >
                        {name}
                      </span>
                    )}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
