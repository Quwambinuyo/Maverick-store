import { Link, NavLink } from "react-router-dom";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { SidebarLinks } from "../utils/SidebarLinks";
import { useSidebarStore } from "../features/store";
import { useEffect } from "react";

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
    <aside className="h-screen">
      <div
        className={`bg-[#543776] ${
          isOpen ? "w-50" : "w-20"
        }  pt-5 relative h-full flex flex-col items-center gap-y-3.5 transition-all duration-200 ease-in-out`}
      >
        <h2>
          <Link
            to="/"
            className={`  ${
              isOpen ? "text-3xl" : "text-2xl"
            } block font font-bold mb-6   text-white`}
          >
            {isOpen ? "Maverick" : "Mav"}
          </Link>
        </h2>
        {SidebarLinks.map((link) => {
          const { icon, name, id } = link;
          return (
            <NavLink
              key={id}
              to=""
              className={`flex items-center py-4 px-3 text-white w-full hover:bg-[#c3acd0] hover:text-[#543776] transition-all duration-200 ${
                isOpen ? "justify-start pl-6 gap-4" : "justify-center"
              }`}
            >
              <span className="text-2xl">{icon}</span>
              {isOpen && (
                <span className="text-[18px] font-semibold whitespace-nowrap">
                  {name}
                </span>
              )}
            </NavLink>
          );
        })}

        <button
          onClick={toggleSidebar}
          className="absolute top-9 -right-4 z-10 cursor-pointer bg-white rounded-full"
        >
          {isOpen ? (
            <BsArrowRightSquareFill className="text-3xl text-[#543776]" />
          ) : (
            <BsArrowLeftSquareFill className="text-3xl text-[#543776]" />
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
