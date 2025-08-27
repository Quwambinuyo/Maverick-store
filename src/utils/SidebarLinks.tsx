import { RxDashboard } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { SiSendgrid } from "react-icons/si";
import { MdPermPhoneMsg } from "react-icons/md";
import { TiInfoLargeOutline } from "react-icons/ti";
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
    icon: <IoBagHandleOutline />,
    path: "/cart",
  },
  {
    id: 4,
    name: "Pages",
    icon: <BiFoodMenu />,
    path: "/pages",
  },
  {
    id: 5,
    name: "Categories",
    icon: <SiSendgrid />,
    path: "/categories",
  },
  {
    id: 6,
    name: "Contact us",
    icon: <MdPermPhoneMsg />,
    path: "/contact",
  },
  {
    id: 7,
    name: "About us",
    icon: <TiInfoLargeOutline />,
    path: "/about",
  },
  // {
  //   id: 8,
  //   name: "Logout",
  //   icon: <IoMdLogOut />,
  //   path: "/login",
  // },
];
