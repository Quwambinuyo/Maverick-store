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
    <aside
      className={`${
        isOpen ? "w-60" : "w-20"
      } h-screen bg-primary-color border-r border-gray-300 flex-shrink-0 fixed top-0 left-0  transition-all duration-200`}
    >
      <div className="relative h-full flex flex-col items-center pt-7">
        <Link
          to="/"
          className={`${
            isOpen ? "text-3xl" : "text-2xl"
          } font-bold mb-6 text-white`}
        >
          {isOpen ? "Maverick" : "Mav"}
        </Link>

        <div className="custom-scrollbar flex-1 w-full overflow-y-auto px-1">
          <div className="flex flex-col gap-y-2 pb-10">
            {SidebarLinks.map(({ icon, name, id, path }) => (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                  `flex items-center sm:py-4 py-7  px-3 w-full transition-all duration-200 ${
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

        <CustomBtn
          onClick={toggleSidebar}
          className="absolute top-14 -right-4 z-50 bg-white rounded-full cursor-pointer"
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
