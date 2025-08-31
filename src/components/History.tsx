import { useState, useEffect } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { fetchUserOrders } from "../features/OrderStore";
import { useAuthStore } from "../features/useAuthStore";
import { db } from "../Auth/firebaseconfig";
import DateInput from "../utils/DateInput";
import LoadingSpinner from "./LoadingSpinner";
import { CgSearch, CgSortAz } from "react-icons/cg";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import OrderDetailsModal from "../components/OrderDetails";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
// import { usePagination } from "../utils/usePagination";
// import PaginationContainer from "./PaginationContainer";
import ReactPaginate from "react-paginate";

const History = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);
  const [orderDetails, setOrderDetails] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);

  const user = useAuthStore((state) => state.user);
  const [searchText, setSearchText] = useState("");

  // const { searchText, setSearchText, totalPages, getSlicedData } =
  // usePagination(orders, currentPage);

  const openDetails = (order: any) => {
    setSelectedOrder(order);
    setOrderDetails(true);
  };

  const closeDetails = () => {
    setSelectedOrder(null);
    setOrderDetails(false);
  };

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

  const orderStats = [
    { title: "Total Orders", value: orders.length },
    {
      title: "Pending Orders",
      value: orders.filter((o) => o.status === "Pending").length,
    },
    {
      title: "Processing Orders",
      value: orders.filter((o) => o.status === "Processing").length,
    },
    {
      title: "Completed Orders",
      value: orders.filter((o) => o.status === "Completed").length,
    },
  ];

  const orderInfo = [
    { title: "Date" },
    { title: "Order Id" },
    { title: "Customer" },
    { title: "Payment" },
    { title: "Total" },
    { title: "Delivery" },
    { title: "Items" },
    { title: "Dispute" },
    { title: "Details" },
  ];

  const filters = ["All", "Processing", "Completed", "Pending"];

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  const filteredHistory = orders?.filter(
    (d: any) =>
      d?.orderId?.toLowerCase().startsWith(searchText.toLowerCase()) ||
      d?.name?.toLowerCase().startsWith(searchText.toLowerCase()) ||
      d?.logistic?.toLowerCase().startsWith(searchText.toLowerCase())
  );

  const currentItems = filteredHistory.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredHistory.length / itemsPerPage);
  // const pageCount = Math.ceil(filteredHistory.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filteredHistory.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <section className="px-6 py-4 pb-16">
        <h2 className="text-xl font-semibold mb-4 text-gray-600">Orders</h2>

        {/* Date input */}
        <div className="relative w-60 mb-6">
          <DateInput />
        </div>

        {/* Order Stats */}
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

        <div className="mt-5 flex justify-end mb-3">
          <div className="flex items-center gap-4">
            {showSearch && (
              <input
                type="search"
                placeholder="All"
                className="border-1 border-primary-color focus:outline outline-none px-2 rounded-lg max-w-[100px]"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
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

        {/* Filters */}
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

        {/* Table */}
        <div className="overflow-x-auto scrollbar-hide mt-5">
          {/* Table Header */}
          <div className="grid grid-cols-9 min-w-[1000px] bg-neutral-200 p-2 rounded-lg">
            {orderInfo.map((info, i) => (
              <div key={i} className="flex justify-center">
                <h2 className="text-sm md:text-md text-gray-800 font-semibold">
                  {info.title}
                </h2>
              </div>
            ))}
          </div>

          {/* Orders List Rows */}
          {loading ? (
            <div className="flex justify-center mt-10">
              <LoadingSpinner />
            </div>
          ) : orders.length === 0 ? (
            <p className="mt-4 text-gray-500">No orders found.</p>
          ) : (
            currentItems.map((order: any, i: number) => (
              // getSlicedData().map((order: any, i: number) => (
              <ul
                key={order.id || i}
                className="grid grid-cols-9 min-w-[1000px] font-semibold place-items-center text-gray-800 mt-3 text-sm bg-white p-2 rounded-lg"
              >
                <li className="text-center">
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "--"}
                </li>

                <li className="text-center">#{order.id}</li>
                <li className="text-center">{order.name || "Unknown"}</li>
                <li
                  className={`text-center max-w-[100px] border font-bold rounded-lg p-1 ${
                    order.status === "Completed"
                      ? "border-green-500 text-green-600"
                      : order.status === "Pending"
                      ? "border-yellow-500 text-yellow-600"
                      : "border-blue-400 text-blue-500"
                  }`}
                >
                  • {order.status}
                </li>
                <li className="text-center">
                  ₦
                  {order.cart
                    ? order.cart
                        .reduce(
                          (acc: number, item: any) =>
                            acc + item.price * item.quantity,
                          0
                        )
                        .toLocaleString()
                    : 0}
                </li>
                <li className="text-center">{order.logistic || "--"}</li>
                <li className="text-center">
                  {order.cart
                    ? order.cart.reduce(
                        (acc: number, item: any) => acc + item.quantity,
                        0
                      )
                    : 0}
                  <p className="text-xs text-gray-500">items</p>
                </li>
                <li className="flex justify-center">
                  <button
                    type="button"
                    className="p-1 cursor-pointer rounded-full hover:bg-gray-100"
                  >
                    <IoChatbubbleEllipsesOutline size={25} />
                  </button>
                </li>
                <li className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => openDetails(order)}
                    className="px-3 py-1 text-sm rounded-lg bg-primary-color text-white hover:bg-primary-dark"
                  >
                    Details
                  </button>
                </li>
              </ul>
            ))
          )}
        </div>

        {selectedOrder && (
          <OrderDetailsModal
            isOpen={orderDetails}
            onClose={closeDetails}
            orderId={selectedOrder.id}
            placedAt={
              selectedOrder.createdAt
                ? new Date(selectedOrder.createdAt).toLocaleString()
                : "--"
            }
            customer={selectedOrder.name || "Unknown"}
            phone={selectedOrder.phone || "--"}
            address={selectedOrder.address || "--"}
            items={selectedOrder.cart || []}
          />
        )}

        <ReactPaginate
          activeClassName="bg-primary-color/70 px-3 text-white"
          className="flex justify-center items-center gap-5  mt-7 cursor-pointer text-gray-800 font-bold"
          breakLabel="....."
          nextLabel={
            <button className="bg-primary-color p-1 text-white rounded-md">
              <MdNavigateNext />
            </button>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={
            <button className="bg-primary-color p-1 text-white rounded-md">
              <MdNavigateBefore />
            </button>
          }
          renderOnZeroPageCount={null}
        />
      </section>
    </>
  );
};

export default History;
