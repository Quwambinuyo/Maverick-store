import { useSearchParams, Navigate } from "react-router-dom";
import DiscountProducts from "./DiscountProducts";
import DownloadApp from "./DownloadApp";
import FeaturedCategories from "./FeaturedCategories";
import Footer from "./Footer";
import PopularProducts from "./PopularProducts";
import SwiperCarousel from "./SwiperCarousel";

const Home = () => {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  if (q.trim() !== "") {
    return <Navigate to={`/search?q=${q}`} replace />;
  }

  return (
    <>
      <SwiperCarousel />
      <div className="p-2">
        <FeaturedCategories />
      </div>
      <DownloadApp />
      <div className="px-2">
        <PopularProducts />
        <DiscountProducts />
      </div>
      <Footer />
    </>
  );
};

export default Home;
