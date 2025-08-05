import { Link, NavLink } from "react-router-dom";
import { SidebarLinks } from "../utils/SidebarLinks";
import { useSidebarStore } from "../features/store";
import { FaTimes } from "react-icons/fa";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <>
      {/* Overlay on mobile */}
      {isOpen && (
        <div
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
        className={`
          ${isOpen ? "w-60" : "w-20"}
          h-screen bg-primary-color border-r border-gray-300 flex-shrink-0 
          fixed top-0 left-0 transition-all duration-300 
          ${isOpen ? "block" : "hidden sm:block"} z-10
        `}
      >
        <div className="relative h-full flex flex-col items-center pt-7">
          {/* Logo */}
          <Link
            to="/"
            className={`${
              isOpen ? "text-3xl" : "text-2xl"
            } font-bold mb-6 text-white`}
          >
            {isOpen ? "Maverick" : "Mav"}
          </Link>

          {/* Toggle Button on sm+ screens */}
          <button
            className="hidden sm:flex items-center justify-center bg-secondary-color absolute -right-4 top-12  rounded-full w-8 h-8"
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <BsArrowLeftSquareFill className="text-primary-color rounded-lg text-2xl w-full h-full drop-shadow-sm" />
            ) : (
              <BsArrowRightSquareFill className="text-primary-color text-2xl  rounded-lg w-full h-full drop-shadow-sm" />
            )}
          </button>

          {/* Links */}
          <div className="custom-scrollbar flex-1 w-full overflow-y-auto px-1 mt-4">
            <div className="flex flex-col gap-y-2 pb-10">
              {SidebarLinks.map(({ icon, name, id, path }) => (
                <NavLink
                  key={id}
                  to={path}
                  onClick={() => {
                    if (window.innerWidth < 640) toggleSidebar();
                  }}
                  className={({ isActive }) =>
                    `flex items-center sm:py-4 py-7 px-3 w-full transition-all duration-200 ${
                      isOpen ? "justify-start pl-6 gap-4" : "justify-center"
                    } ${
                      isActive
                        ? "bg-white text-primary-color font-semibold"
                        : "text-white hover:bg-secondary-color hover:text-primary-color"
                    }`
                  }
                >
                  <span className="sm:text-2xl text-[25px]">{icon}</span>
                  {isOpen && (
                    <span className="text-[18px] font-semibold whitespace-nowrap">
                      {name}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
