import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useSidebarStore } from "../features/store";
import Loader from "./Loader";
import { useEffect, useRef } from "react";
import { useAuthStore } from "../features/useAuthStore";

const Layout = () => {
  const { isOpen, setLoading, loading } = useSidebarStore();
  const { fetchUser } = useAuthStore();
  const location = useLocation();

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

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

  useEffect(() => {
    console.log(location.pathname);

    // window.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden relative">
      {loading && <Loader />}
      <Sidebar />
      <div
        className={`flex flex-col transition-all duration-300 w-full 
          ${isOpen ? "sm:pl-60" : "sm:pl-25"}`}
      >
        <Navbar />
        <main
          className="flex-1 overflow-y-auto  bg-gray-50 pb-19 min-h-screen"
          ref={mainRef}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
