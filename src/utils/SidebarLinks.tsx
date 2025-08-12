import { RxDashboard } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { PiListBold } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { MdOutlineCallEnd } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

export const SidebarLinks = [
  {
    id: 1,
    name: "Dashboard",
    icon: <RxDashboard />,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Cart",
    icon: <BsCart3 />,
    path: "/cart",
  },
  {
    id: 3,
    name: "Pages",
    icon: <PiListBold />,
    path: "/pages",
  },
  {
    id: 4,
    name: "Categories",
    icon: <BiCategory />,
    path: "/categories",
  },
  {
    id: 5,
    name: "Contact us",
    icon: <MdOutlineCallEnd />,
    path: "/contact",
  },
  {
    id: 6,
    name: "About us",
    icon: <FaInfo />,
    path: "/about",
  },
  {
    id: 7,
    name: "Logout",
    icon: <IoMdLogOut />,
    path: "/register",
  },
];
