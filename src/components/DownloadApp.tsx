import CustomBtn from "../utils/CustomBtn";

const DownloadApp = () => {
  return (
    <section>
      <div className="md:p-9 p-2 bg-primary-color ">
        <div className="flex justify-between bg-white md:p-8 p-4 rounded-xl items-center">
          <div className="md:w-[550px] max-w-[600px]  md:space-y-4 space-y-2">
            <h2 className="text-sm md:text-[20px] font-bold capitalize text-gray-800">
              Organic Products and Food
            </h2>
            <div>
              <span className="text-sm md:text-2xl font-bold text-gray-950 mr-2">
                Quick Delivery to
              </span>
              <span className="text-sm md:text-2xl font-bold text-primary-color ">
                Your Home
              </span>
            </div>
            <p>
              There are many products you will find our shop, Choose your daily
              necessary product from our KachaBazar shop and get some special
              offer. See Our latest discounted products from here and get a
              special discount.
            </p>
            <CustomBtn
              label="Download App"
              className="bg-primary-color text-white p-2 px-3 rounded-xl "
            />
          </div>
          <div className="hidden md:block">
            <img
              src="https://grocery-store-app-cypher1998.vercel.app/static/media/delivery-boy.27213ed5b840b00390b8.webp"
              alt="download app"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
