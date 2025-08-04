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
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isOpen ? "ml-60" : "ml-20"
        }`}
      >
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
