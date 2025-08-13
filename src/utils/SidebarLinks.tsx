import { RxDashboard } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { PiListBold } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { MdOutlineCallEnd } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoMdHome } from "react-icons/io";

export const SidebarLinks = [
  {
    id: 1,
    name: "Home",
    icon: <IoMdHome />,
    path: "/home",
  },
  {
    id: 2,
    name: "Dashboard",
    icon: <RxDashboard />,
    path: "/dashboard",
  },
  {
    id: 3,
    name: "Cart",
    icon: <BsCart3 />,
    path: "/cart",
  },
  {
    id: 4,
    name: "Pages",
    icon: <PiListBold />,
    path: "/pages",
  },
  {
    id: 5,
    name: "Categories",
    icon: <BiCategory />,
    path: "/categories",
  },
  {
    id: 6,
    name: "Contact us",
    icon: <MdOutlineCallEnd />,
    path: "/contact",
  },
  {
    id: 7,
    name: "About us",
    icon: <FaInfo />,
    path: "/about",
  },
  {
    id: 8,
    name: "Logout",
    icon: <IoMdLogOut />,
    path: "/register",
  },
];
