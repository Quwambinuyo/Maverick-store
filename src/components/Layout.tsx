import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useSidebarStore } from "../features/store";
import Loader from "./Loader";
import { useEffect } from "react";
import { useAuthStore } from "../features/useAuthStore";

const Layout = () => {
  const { isOpen, setLoading, loading } = useSidebarStore();
  const { fetchUser } = useAuthStore();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden relative">
      {loading && <Loader />}
      <Sidebar />
      <div
        className={`flex flex-col transition-all duration-300 w-full 
          ${isOpen ? "sm:pl-60" : "sm:pl-25"}`}
      >
        <Navbar />
        <main className="flex-1 overflow-y-auto  bg-gray-50 pb-19 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
