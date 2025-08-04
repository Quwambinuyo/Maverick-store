import { Link, NavLink } from "react-router-dom";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { SidebarLinks } from "../utils/SidebarLinks";
import { useSidebarStore } from "../features/store";
import { useEffect } from "react";
import CustomBtn from "../utils/CustomBtn";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        useSidebarStore.getState().setSidebar(false);
      } else {
        useSidebarStore.getState().setSidebar(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside className="h-screen flex-shrink-0">
      <div
        className={`bg-primary-color ${
          isOpen ? "w-60" : "w-20"
        } relative h-full flex flex-col border-r border-gray-300 items-center transition-all duration-200 ease-in-out`}
      >
        <h2>
          <Link
            to="/"
            className={`${
              isOpen ? "text-3xl" : "text-2xl"
            } block font-bold mb-6 pt-11 text-white`}
          >
            {isOpen ? "Maverick" : "Mav"}
          </Link>
        </h2>

        <div className="custom-scrollbar w-full flex-1 overflow-y-auto px-1">
          <div className="flex flex-col gap-y-3.5 pb-10">
            {SidebarLinks.map(({ icon, name, id, path }) => (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                  `flex items-center py-6 px-3 w-full transition-all duration-200 ${
                    isOpen ? "justify-start pl-6 gap-4" : "justify-center"
                  } ${
                    isActive
                      ? "bg-white text-primary-color font-semibold"
                      : "text-white hover:bg-secondary-color hover:text-primary-color"
                  }`
                }
              >
                <span className="text-2xl">{icon}</span>
                {isOpen && (
                  <span className="text-[18px] font-semibold whitespace-nowrap">
                    {name}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>

        <CustomBtn
          onClick={toggleSidebar}
          className="absolute top-14 -right-4 z-10 cursor-pointer bg-white rounded-full"
        >
          {isOpen ? (
            <BsArrowLeftSquareFill className="text-3xl text-[#543776]" />
          ) : (
            <BsArrowRightSquareFill className="text-3xl text-[#543776]" />
          )}
        </CustomBtn>
      </div>
    </aside>
  );
};

export default Sidebar;
