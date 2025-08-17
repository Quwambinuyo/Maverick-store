import { BsCart } from "react-icons/bs";
import CustomBtn from "../utils/CustomBtn";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout";
import { FaHome } from "react-icons/fa";
import { useAuthStore } from "../features/useAuthStore";
import { getSavedUserData } from "../utils/utils";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const backToHome = () => {
    navigate("/home");
  };
  const { userData } = getSavedUserData(user?.uid as string);

  return (
    <section className="">
      <div className=" mx-2 flex justify-between rounded-lg items-center px-5 py-5">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-lg sm:text-2xl font-bold text-gray-900">
              Welcome,
            </p>
            <p className="text-[15px]  sm:text-[25px] font-bold text-primary-color">
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
            <img
              src={userData?.photoURL.base64}
              className="w-full h-full object-cover"
              alt="User avatar"
            />
          ) : (
            <h1 className="text-white text-4xl sm:text-3xl lg:text-[70px]">
              {user?.displayName?.charAt(0)}
            </h1>
          )}
        </div>
      </div>

      <article className="mt-5">
        <h2 className="mb-3 font-bold text-lg sm:text-[17px] px-2 text-gray-800">
          Dashboard
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-2">
          <div className="bg-white p-4 rounded shadow flex gap-4 items-center">
            <div className="bg-red-200 text-red-500 p-4 rounded-full text-lg sm:text-[20px]">
              <BsCart />
            </div>
            <div className="text-lg sm:text-[17px] font-semibold">
              <h1>Total Order</h1>
              <p>5</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex gap-4 items-center">
            <div className="bg-orange-200 text-orange-500 p-4 rounded-full text-lg sm:text-[20px]">
              <BsCart />
            </div>
            <div className="text-lg sm:text-[17px] font-semibold">
              <h1>Pending Order</h1>
              <p>3</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex gap-4 items-center">
            <div className="bg-blue-200 text-blue-500 p-4 rounded-full text-lg sm:text-[20px]">
              <BsCart />
            </div>
            <div className="text-lg sm:text-[17px] font-semibold">
              <h1>Processing Order</h1>
              <p>1</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex gap-4 items-center">
            <div className="bg-green-200 text-green-500 p-4 rounded-full text-lg sm:text-[20px]">
              <BsCart />
            </div>
            <div className="text-lg sm:text-[17px] font-semibold">
              <h1>Completed Order</h1>
              <p>1</p>
            </div>
          </div>
        </div>
        <Checkout />
      </article>
      <CustomBtn
        label="Home"
        className="mt-2 mx-2 flex flex-row-reverse items-center gap-2"
        onClick={backToHome}
      >
        <FaHome />
      </CustomBtn>
    </section>
  );
};

export default Dashboard;
