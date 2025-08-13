import { Link, NavLink } from "react-router-dom";
import { SidebarLinks } from "../utils/SidebarLinks";
import { useSidebarStore } from "../features/store";
import { FaTimes } from "react-icons/fa";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { useCartStore } from "../features/cartstore";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { cart } = useCartStore();
  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Overlay on mobile */}
      {isOpen && (
        <div
          // onClick={toggleSidebar}
          className="fixed inset-0 bg-[#393F4266] backdrop-blur-[2px] sm:hidden h-[lvh]"
          style={{ zIndex: 5 }}
        >
          <button
            className="absolute top-2 right-3 rounded-full h-[42px] w-[42px] bg-primary-color flex items-center justify-center"
            onClick={toggleSidebar}
          >
            <FaTimes color="#ffffff" size={20} />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-60" : "w-20"
        } h-screen bg-primary-color border-r border-gray-300 flex-shrink-0 fixed top-0 left-0 transition-all duration-300 ${
          isOpen ? "block" : "hidden sm:block"
        } z-10`}
      >
        <div className="relative h-full flex flex-col items-center py-7 ">
          {/* Logo */}
          <Link
            onClick={() => {
              if (window.innerWidth < 640) toggleSidebar();
            }}
            to="/home"
            className={`${
              isOpen ? "text-3xl" : "text-2xl"
            } font-bold mb-6 text-white henny-penny-regular`}
          >
            {isOpen ? "Maverick" : "Mav"}
          </Link>

          {/* Toggle Button */}
          <button
            className="hidden sm:flex items-center justify-center bg-secondary-color absolute -right-4 top-12 rounded-full w-8 h-8"
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <BsArrowLeftSquareFill className="text-primary-color rounded-lg text-2xl w-full h-full drop-shadow-sm" />
            ) : (
              <BsArrowRightSquareFill className="text-primary-color text-2xl rounded-lg w-full h-full drop-shadow-sm" />
            )}
          </button>

          {/* Links */}
          <div className="custom-scrollbar flex-1 w-full overflow-y-auto px-1 mt-4">
            <div
              className={`flex flex-col ${
                isOpen ? "gap-y-4" : "gap-y-6"
              } pb-10`}
            >
              {SidebarLinks.map(({ icon, name, id, path }) => {
                const isLogout = name.toLowerCase() === "logout";

                return (
                  <NavLink
                    key={id}
                    to={path}
                    onClick={() => {
                      if (window.innerWidth < 640) toggleSidebar();
                    }}
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
                      className={`flex items-center ${
                        isOpen ? "gap-4 justify-start pl-6" : "justify-center"
                      } ${
                        isLogout
                          ? "bg-white mt-9 rounded-full px-5 py-4 w-fit mx-auto"
                          : "sm:py-4 py-7 w-full"
                      }`}
                    >
                      <span className="text-[20px] relative">
                        {icon}
                        {name.toLocaleLowerCase() === "cart" && (
                          <span className="absolute -top-2 -right-2 flex items-center justify-center text-[10px] h-3 w-3 p-2  rounded-full bg-red-200  text-red-600  ">
                            {cartQuantity}
                          </span>
                        )}
                      </span>
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
      </aside>
    </>
  );
};

export default Sidebar;
