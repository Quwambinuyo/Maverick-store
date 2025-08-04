import { LuLayoutDashboard } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { PiWarningCircleBold } from "react-icons/pi";

export const SidebarLinks = [
  {
    id: 1,
    name: "Dashboard",
    icon: <LuLayoutDashboard />,
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
    icon: <FaList />,
    path: "/pages",
  },
  {
    id: 4,
    name: "Categories",
    icon: <MdCategory />,
    path: "/categories",
  },
  {
    id: 5,
    name: "Contact us",
    icon: <RiContactsFill />,
    path: "/contact",
  },
  {
    id: 6,
    name: "About us",
    icon: <PiWarningCircleBold />,
    path: "/about",
  },
];
