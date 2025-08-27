import { BsCart } from "react-icons/bs";
import CustomBtn from "../utils/CustomBtn";
import { NavLink, useNavigate } from "react-router-dom";
import History from "../components/History";
import { FaHome } from "react-icons/fa";
import { useAuthStore } from "../features/useAuthStore";
import { getSavedUserData } from "../utils/utils";
import { db } from "../Auth/firebaseconfig";
import { fetchUserOrders } from "../features/OrderStore";
import { useEffect, useState } from "react";
import { useSidebarStore } from "../features/store";

const Dashboard = () => {
  const navigate = useNavigate();
  const { setLoading } = useSidebarStore();
  const [orders, setOrders] = useState<any[]>([]);
  const user = useAuthStore((state) => state.user);
  const { userData } = getSavedUserData(user?.uid as string);

  const backToHome = () => {
    navigate("/home");
  };

  const orderStats = [
    {
      title: "Total Orders",
      value: orders.length,
      color: "bg-red-200 text-red-500",
    },
    {
      title: "Pending Orders",
      value: orders.filter((o) => o.status === "Pending").length,
      color: "bg-orange-200 text-orange-500",
    },
    {
      title: "Processing Orders",
      value: orders.filter((o) => o.status === "Processing").length,
      color: "bg-blue-200 text-blue-500",
    },
    {
      title: "Completed Orders",
      value: orders.filter((o) => o.status === "Completed").length,
      color: "bg-green-200 text-green-500",
    },
  ];

  useEffect(() => {
    const loadOrders = async () => {
      if (!user) return;
      setLoading(true);
      const data = await fetchUserOrders(db, user.uid);
      setOrders(data);
      setLoading(false);
    };
    loadOrders();
  }, [user]);

  return (
    <section className="">
      {/* User Header */}
      <div className="mx-2 flex justify-between rounded-lg items-center px-5 py-5">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-lg sm:text-2xl font-bold text-gray-900">
              Welcome,
            </p>
            <p className="text-[15px] sm:text-[25px] font-bold text-primary-color">
              {user?.displayName}
            </p>
          </div>
          <div>
            <h1 className="text-lg sm:text-[17px] font-semibold text-gray-700">
              {user?.email}
            </h1>
          </div>
        </div>

        {/* Profile container (circle always) */}
        <div className="bg-primary-color h-[50px] w-[50px] flex justify-center items-center sm:h-[100px] sm:w-[100px] rounded-full overflow-hidden">
          {userData?.photoURL ? (
            <NavLink to="/profile">
              <img
                src={userData?.photoURL.base64}
                className="w-full h-full object-cover cursor-pointer"
                alt="User avatar"
              />
            </NavLink>
          ) : (
            <NavLink to="/profile">
              <h1 className="text-white text-4xl sm:text-3xl lg:text-[70px]">
                {user?.displayName?.charAt(0)}
              </h1>
            </NavLink>
          )}
        </div>
      </div>

      {/* Dashboard Stats */}
      <article className="mt-5">
        <h2 className="mb-2 font-bold text-lg sm:text-[17px] px-2 text-gray-800">
          Dashboard
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-2">
          {orderStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded shadow flex gap-4 items-center"
            >
              <div
                className={`${stat.color} p-4 rounded-full text-lg sm:text-[20px]`}
              >
                <BsCart />
              </div>
              <div className="text-lg sm:text-[17px] font-semibold">
                <h1>{stat.title}</h1>
                <p>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Orders History*/}
        <History />
      </article>

      {/* Back to home */}
      <CustomBtn
        label="Home"
        className="mt-2 mx-2 p-3 rounded-lg mb-9 flex flex-row-reverse items-center gap-2"
        onClick={backToHome}
      >
        <FaHome />
      </CustomBtn>
    </section>
  );
};

export default Dashboard;
