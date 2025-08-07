import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import landingImg from "../assets/images/landing.png";

const LandingSwiper = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-[#E9E5EE] px-14 py-10 gap-10 pt-36">
      <div className="w-full md:w-1/2">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Autoplay]}
          className="w-full"
        >
          <SwiperSlide>
            <h2 className="text-primary-color text-2xl md:text-5xl font-bold">
              Get <span className="text-yellow-500">Affordable</span> Wears That
              Suit Your Budget
            </h2>
          </SwiperSlide>

          <SwiperSlide>
            <h2 className="text-primary-color text-2xl md:text-5xl font-bold">
              Start Budgeting With Clarity With Our{" "}
              <span className="text-red-500">Discounted</span> Products
            </h2>
          </SwiperSlide>
        </Swiper>

        <p className="text-gray-800 font-medium text-base md:text-lg mt-6 leading-relaxed">
          Maverick Store is your ultimate destination for affordable, stylish
          fashion. We provide a wide range of clothing that suits every budget
          and lifestyle. Our collection includes trendy wear for men and women.
          From casual to formal, we offer it all including jerseys, dresses,
          pants, and more. Each product is handpicked for quality, comfort, and
          durability. We offer frequent discounts and bulk deals to help you
          save more.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={landingImg}
          alt="Fashion promo"
          className="w-full max-w-[500px] object-contain"
        />
      </div>
    </section>
  );
};

export default LandingSwiper;
