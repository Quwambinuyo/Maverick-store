import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperImg } from "../data/SwiperImg";
import CustomBtn from "../utils/CustomBtn";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "../index.css";

const Home = () => {
  return (
    <div className="w-full m-auto">
      <div className="mt-2">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          {SwiperImg.map((item) => {
            const { image, id, description, paragraph } = item;

            return (
              <SwiperSlide key={id}>
                <div
                  className="w-full rounded-xl overflow-hidden relative md:object-center flex flex-col justify-end"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                  }}
                >
                  <div className="p-4 absolute bottom-0 left-0 right-0">
                    <span className="block text-black text-lg font-bold capitalize mb-1">
                      {description}
                    </span>
                    <p className="text-sm text-black font-semibold md:block hidden">
                      {paragraph}
                    </p>
                    <p className="text-sm text-black font-semibold md:hidden">
                      {paragraph.length > 10
                        ? `${paragraph.slice(0, 10)}...`
                        : paragraph}
                    </p>
                    <div className="mt-2 hidden sm:block">
                      <CustomBtn
                        label="Shop Now"
                        className="bg-primary-color p-3 rounded-md text-white"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Quality Product Section */}
        <div className="bg-white  shadow-sm mt-3 p-3 rounded-md inline-flex flex-wrap items-center gap-4  max-w-fit w-full">
          <div>
            <div className="flex gap-2">
              <span className="text-sm sm:text-2xl font-bold text-primary-color block">
                100% Original
              </span>
              <span className="text-sm sm:text-2xl font-bold block">
                Quality Product
              </span>
            </div>
            <p className="text-base sm:text-lg font-light text-gray-500">
              See our latest discounted products and get a special
              <span className="text-purple-800 font-bold ml-2">discount</span>
            </p>
          </div>

          <CustomBtn className="bg-primary-color text-white font-bold px-4 py-2 rounded-md">
            Shop
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Home;
