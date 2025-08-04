import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperImg } from "../data/SwiperImg";
import "swiper/css/navigation";
import "swiper/css";
import "../index.css";

const Home = () => {
  return (
    <div className="w-[100%] m-auto">
      <div className="mt-5">
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
            const { image, id } = item;
            return (
              <SwiperSlide key={id}>
                <div className="flex justify-center">
                  <img
                    src={image}
                    alt=""
                    className="w-[90%] max-w-3xl object-cover rounded-xl"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
