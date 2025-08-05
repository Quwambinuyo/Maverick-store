import FeaturedCategories from "./FeaturedCategories";
import PopularProducts from "./PopularProducts";
import SwiperCarousel from "./SwiperCarousel";

const Home = () => {
  return (
    <>
      <SwiperCarousel />
      <FeaturedCategories />
      <PopularProducts />
    </>
  );
};

export default Home;
