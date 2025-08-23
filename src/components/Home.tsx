import DiscountProducts from "./DiscountProducts";
import DownloadApp from "./DownloadApp";
import FeaturedCategories from "./FeaturedCategories";
import PopularProducts from "./PopularProducts";
import SwiperCarousel from "./SwiperCarousel";

const Home = () => {
  return (
    <>
      <div className="p-2">
        <SwiperCarousel />
        <FeaturedCategories />
        <PopularProducts />
        <DownloadApp />
        <DiscountProducts />
      </div>
    </>
  );
};

export default Home;
