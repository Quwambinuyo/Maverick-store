import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperImg } from "../data/SwiperImg";
import CustomBtn from "../utils/CustomBtn";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "../index.css";
import { useNavigate } from "react-router-dom";

const SwiperCarousel = () => {
  const navigate = useNavigate();

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
            const { id, description, paragraph, image } = item;

            return (
              <SwiperSlide key={id}>
                <div
                  className="w-full  overflow-hidden relative flex flex-col justify-end h-[200px] sm:h-[400px] lg:h-[75vh] lg:max-h-[500px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0  bg-opacity-40"></div>

                  {/* Text Content */}
                  <div className="p-4 absolute bottom-0 left-0 right-0 z-10">
                    <span className="block carousel-text  text-xl md:text-3xl font-bold capitalize mb-1">
                      {description}
                    </span>
                    <p className="text-lg carousel-text font-light md:block hidden">
                      {paragraph}
                    </p>
                    <p className="text-sm text-neutral-300 font-semibold md:hidden">
                      {paragraph.length > 10
                        ? `${paragraph.slice(0, 10)}...`
                        : paragraph}
                    </p>
                    <div className="mt-2 hidden sm:block">
                      <CustomBtn
                        onClick={() => navigate("/products")}
                        label="Shop Now"
                        className="bg-primary-color cursor-pointer p-3 rounded-md text-white"
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
              <span className="text-primary-color font-bold ml-2">
                discount
              </span>
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
