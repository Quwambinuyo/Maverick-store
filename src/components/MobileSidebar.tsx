import { Link, NavLink } from "react-router-dom";
import { SidebarLinks } from "../utils/SidebarLinks";
import { useSidebarStore } from "../features/store";
import { FaTimes } from "react-icons/fa";
import { useCartStore } from "../features/cartstore";
import { motion } from "framer-motion";
import { IoMdLogOut } from "react-icons/io";
import { useAuthStore } from "../features/useAuthStore";
import { useEffect } from "react";

const MobileSidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { cart } = useCartStore();
  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const { logout } = useAuthStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={toggleSidebar}
        className={`fixed inset-0 bg-[#393F4266] backdrop-blur-[2px] sm:hidden transition-opacity duration-100 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ zIndex: 5 }}
      >
        <button className="absolute cursor-pointer top-2 right-3 rounded-full h-[42px] w-[42px] bg-primary-color flex items-center justify-center">
          <FaTimes color="#ffffff" size={20} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-primary-color border-r border-gray-300 flex-shrink-0 z-20 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0 w-60" : "-translate-x-full w-60"} 
        sm:translate-x-0 sm:w-20`}
      >
        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-5 flex-shrink-0">
            {isOpen ? (
              <Link
                onClick={() => {
                  if (window.innerWidth < 640) toggleSidebar();
                }}
                to="/home"
                className="text-2xl font-bold text-white henny-penny-regular whitespace-nowrap"
              >
                Maverick Store
              </Link>
            ) : (
              <span className="flex-1" />
            )}
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto px-1 mt-4 custom-scrollbar">
            <div className={`flex flex-col ${isOpen ? "gap-y-4" : "gap-y-6"}`}>
              {SidebarLinks.map(({ icon, name, id, path }) => {
                return (
                  <NavLink
                    key={id}
                    to={path}
                    onClick={() => {
                      if (window.innerWidth < 640) toggleSidebar();
                    }}
                    className={({ isActive }) =>
                      `block w-full transition-all duration-200 libre-baskerville-bold ${
                        isActive
                          ? "bg-[#EFFCF2] text-primary-color font-semibold border-r-4 border-secondary-color"
                          : "text-white hover:bg-secondary-color hover:text-primary-color"
                      }`
                    }
                  >
                    <div
                      className={`relative flex items-center ${
                        isOpen
                          ? "gap-4 justify-start pl-6 sm:py-4 py-7 w-full"
                          : "justify-center "
                      } `}
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
                        <span className="text-[18px] font-semibold whitespace-nowrap">
                          {name}
                        </span>
                      )}
                    </div>
                  </NavLink>
                );
              })}

              {isOpen && (
                <div
                  onClick={logout}
                  className="flex justify-center items-center bg-white max-w-[250px] mx-auto px-9 py-2  mb-16 rounded-full gap-2 cursor-pointer"
                >
                  <IoMdLogOut className="text-red-500 text-3xl" />
                  <button className="font-medium cursor-pointer ">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
