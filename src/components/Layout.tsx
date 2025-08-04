import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useSidebarStore } from "../features/store";

const Layout = () => {
  const { isOpen } = useSidebarStore();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div
        className={`flex flex-col transition-all duration-300 w-full ${
          isOpen ? "pl-60" : "pl-20"
        }`}
      >
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
