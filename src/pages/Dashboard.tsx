import { BsCart } from "react-icons/bs";
import CustomBtn from "../utils/CustomBtn";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/home");
  };
  return (
    <section className="">
      <div className="bg-secondary-color flex justify-between rounded-lg items-center px-5 py-5">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-lg sm:text-2xl font-bold text-gray-900">
              Welcome,
            </p>
            <p className="text-lg sm:text-[25px] font-bold text-primary-color">
              Quwam
            </p>
          </div>
          <div>
            <h1 className="text-lg sm:text-[20px] font-semibold text-gray-700">
              Test@gmail.com
            </h1>
          </div>
        </div>
        <div className="bg-primary-color flex rounded-full justify-center items-center h-20 w-20">
          <h1 className="text-white text-lg sm:text-3xl">Q</h1>
        </div>
      </div>

      <article className="mt-5">
        <h2 className="mb-3 font-bold text-lg sm:text-[20px] text-gray-800">
          Dashboard
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow flex gap-4 items-center">
            <div className="bg-red-200 text-red-500 p-4 rounded-full text-lg sm:text-[20px]">
              <BsCart />
            </div>
            <div className="text-lg sm:text-[20px] font-semibold">
              <h1>Total Order</h1>
              <p>5</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex gap-4 items-center">
            <div className="bg-orange-200 text-orange-500 p-4 rounded-full text-lg sm:text-[20px]">
              <BsCart />
            </div>
            <div className="text-lg sm:text-[20px] font-semibold">
              <h1>Pending Order</h1>
              <p>3</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex gap-4 items-center">
            <div className="bg-blue-200 text-blue-500 p-4 rounded-full text-lg sm:text-[20px]">
              <BsCart />
            </div>
            <div className="text-lg sm:text-[20px] font-semibold">
              <h1>Processing Order</h1>
              <p>1</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow flex gap-4 items-center">
            <div className="bg-green-200 text-green-500 p-4 rounded-full text-lg sm:text-[20px]">
              <BsCart />
            </div>
            <div className="text-lg sm:text-[20px] font-semibold">
              <h1>Completed Order</h1>
              <p>1</p>
            </div>
          </div>
        </div>
        <CustomBtn label="Back to Home" className="mt-5" onClick={backToHome} />
      </article>
    </section>
  );
};

export default Dashboard;
