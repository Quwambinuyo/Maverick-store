import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import { CgSortAz } from "react-icons/cg";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const History = () => {
  const dateInputRef = useRef<HTMLInputElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const openCalendar = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker?.();
      dateInputRef.current.click();
    }
  };

  const orderStats = [
    { title: "Total Orders", value: 5 },
    { title: "Pending Orders", value: 5 },
    { title: "Processing Orders", value: 5 },
    { title: "Completed Orders", value: 5 },
  ];

  const orderInfo = [
    { title: "Order" },
    { title: "Date" },
    { title: "Customer" },
    { title: "Payment" },
    { title: "Total" },
    { title: "Delivery" },
    { title: "Items" },
    { title: "Dispute" },
  ];

  const filters = ["All", "Unified", "Unpaid", "Closed"];

  return (
    <section className="px-6 py-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-600">Orders</h2>

      {/* Date input */}
      <div className="relative w-60 mb-6">
        <input
          ref={dateInputRef}
          type="date"
          className="w-full font-bold text-primary-color px-3 py-2 pr-10 border border-primary-color rounded-lg focus:outline-none appearance-none"
        />
        <button
          type="button"
          onClick={openCalendar}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-color"
        >
          <FaChevronDown />
        </button>
      </div>

      {/* Order Stats - back to normal grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {orderStats.map((stat, i) => (
          <div key={i} className="p-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-sm md:text-lg font-semibold text-gray-800">
                {stat.title}
              </h2>
              <p className="text-lg font-bold text-primary-color">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex overflow-x-auto scrollbar-hide gap-3">
        {filters.map((filter, i) => (
          <button
            key={i}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg transition 
            ${
              activeFilter === filter
                ? "bg-primary-color text-white font-semibold"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            <h2 className="text-sm md:text-md">{filter}</h2>
          </button>
        ))}
      </div>

      <div className="flex overflow-x-auto scrollbar-hide mt-5 gap-7  items-center bg-neutral-200 p-2 rounded-lg justify-between">
        <div className="flex gap-10 md:gap-20">
          {orderInfo.map((info, i) => {
            return (
              <div key={i} className="flex flex-col items-center">
                <h2 className="text-sm md:text-md text-gray-800 font-semibold">
                  {info.title}
                </h2>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          {showSearch && (
            <input
              type="search"
              className="border-1 border-primary-color focus:outline outline-none px-2 rounded-lg max-w-[100px]"
            />
          )}
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="bg-primary-color p-1 rounded-lg flex items-center justify-center"
          >
            <CgSearch size={20} className="text-white" />
          </button>
          <button className="bg-primary-color p-1 rounded-lg flex items-center justify-center">
            <CgSortAz size={20} className="text-white" />
          </button>
          <button className="bg-primary-color p-1 rounded-lg flex items-center justify-center">
            <PiDotsThreeOutlineFill size={20} className="text-white" />
          </button>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default History;
