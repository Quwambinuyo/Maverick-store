import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useLandingNavbar } from "../features/store";

const LandingNav = () => {
  const { isOpen, toggleLandingNav } = useLandingNavbar();

  return (
    <nav className="relative">
      <div className="flex justify-between items-center px-6 md:px-20 py-6 shadow-md bg-white z-50 relative">
        {/* Logo */}
        <div className="flex items-center gap-14">
          <span className="font-bold text-primary-color text-[15px] md:text-2xl henny-penny-regular">
            Maverick Store
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-sm md:text-[15px] font-semibold text-primary-color"
          >
            Learn more
          </a>

          <NavLink
            to="/login"
            className="text-sm text-primary-color border-2 border-primary-color rounded-lg w-36 h-11 flex items-center justify-center"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="text-sm text-white bg-primary-color border-2 border-primary-color rounded-lg w-36 h-11 flex items-center justify-center"
          >
            Sign Up For Free
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleLandingNav}
          className="md:hidden text-3xl text-primary-color z-50"
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center gap-6 px-6 transition-all duration-300">
          <a
            href="#"
            className="text-lg font-semibold text-primary-color"
            onClick={toggleLandingNav}
          >
            Learn more
          </a>

          <NavLink
            to="/login"
            onClick={toggleLandingNav}
            className="text-sm text-primary-color border-2 border-primary-color rounded-lg w-36 h-11 flex items-center justify-center"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            onClick={toggleLandingNav}
            className="text-sm text-white bg-primary-color border-2 border-primary-color rounded-lg w-36 h-11 flex items-center justify-center"
          >
            Sign Up For Free
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default LandingNav;
