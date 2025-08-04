import CustomInput from "../utils/CustomInput";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";
import CustomBtn from "../utils/CustomBtn";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-[70px]  bg-secondary-color px-4 py-2">
      <div className="flex items-center justify-between w-full">
        <CustomInput
          type="search"
          placeholder="Search for products"
          className="max-w-md w-full text-primary-color font-semibold"
        >
          <CustomBtn className="flex item-center">
            <CiSearch className="text-xl " />
          </CustomBtn>
        </CustomInput>

        <div className="ml-4 text-2xl text-gray-800">
          <IoIosNotifications />
        </div>

        <div className="ml-4 text-2xl text-gray-800">
          <IoSunnySharp />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
