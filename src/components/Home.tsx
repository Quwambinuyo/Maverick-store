import DiscountProducts from "./DiscountProducts";
import DownloadApp from "./DownloadApp";
import FeaturedCategories from "./FeaturedCategories";
import PopularProducts from "./PopularProducts";
import SwiperCarousel from "./SwiperCarousel";

const Home = () => {
  return (
    <>
      <SwiperCarousel />
      <FeaturedCategories />
      <PopularProducts />
      <DownloadApp />
      <DiscountProducts />
    </>
  );
};

export default Home;
