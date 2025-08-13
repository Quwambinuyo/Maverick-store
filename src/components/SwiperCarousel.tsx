import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperImg } from "../data/SwiperImg";
import CustomBtn from "../utils/CustomBtn";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "../index.css";

const SwiperCarousel = () => {
  return (
    <div className="w-[99%] md:w-full m-auto mx-1 md:mx-0">
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
                  className="w-full rounded-md overflow-hidden relative flex flex-col justify-end h-[200px] sm:h-[300px]"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="p-4 absolute  bottom-0 left-0 right-0">
                    <span className="block text-white  text-lg font-bold capitalize mb-1">
                      {description}
                    </span>
                    <p className="text-sm text-stone-200 font-semibold md:block hidden">
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
        <div className="bg-white shadow-sm mt-3 p-3 rounded-md w-full flex flex-col sm:flex-row flex-wrap justify-between gap-4">
          <div className="min-w-0 max-w-full flex-1">
            <div className="flex flex-wrap sm:flex-nowrap gap-2">
              <span className="text-sm sm:text-2xl font-bold text-primary-color block break-words whitespace-normal">
                100% Original
              </span>
              <span className="text-sm sm:text-2xl font-bold block break-words whitespace-normal">
                Quality Product
              </span>
            </div>
            <p className="text-base sm:text-lg font-light text-gray-500 break-words whitespace-normal">
              See our latest discounted products and get a special
              <span className="text-purple-800 font-bold ml-2">discount</span>
            </p>
          </div>

          <CustomBtn className="bg-primary-color items-start text-white font-bold px-4 py-2 rounded-md">
            Shop
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default SwiperCarousel;
