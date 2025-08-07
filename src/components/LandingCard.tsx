import { useState, useEffect } from "react";
import { TiPin } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const features = [
  "Create a personalized collection for your wardrobe",
  "Get a prediction on the latest drip in town",
  "Generate high fashion taste",
  "Obtain a lovable outfit",
  "Make your friend ask the secret to your sexiness",
];

const LandingCard = () => {
  const [slidesPerView, setSlidesPerView] = useState(1.2);

  // Dynamically set slidesPerView based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 500) {
        setSlidesPerView(1.2);
      } else if (width < 768) {
        setSlidesPerView(1.2);
      } else if (width < 1024) {
        setSlidesPerView(1.5);
      } else {
        setSlidesPerView(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative multicube flex flex-col justify-start gap-6 py-10 overflow-hidden">
      {/* Heading */}
      <div className="w-full max-w-6xl px-2 mx-auto">
        <p className="text-white md:text-[40px] text-[20px] font-bold">
          Just name it, We’ve figured it Out.
        </p>
      </div>

      {/* Swiper Section */}
      <div className="w-full max-w-6xl px-4 mx-auto relative overflow-x-hidden">
        <Swiper
          className="!overflow-visible"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          {features.map((text, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md relative p-5 h-40 flex items-start gap-2">
                <TiPin className="absolute top-2 left-2 text-primary-color text-[35px] bg-yellow-100 p-1 rounded-full" />
                <p className="text-[20px] sm:text-[26px] text-primary-color self-center text-start font-bold leading-6 mt-4">
                  {text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LandingCard;
