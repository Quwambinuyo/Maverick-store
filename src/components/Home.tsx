import { useSearchParams, Navigate } from "react-router-dom";
// import { useSidebarStore } from "../features/store";
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
      <div className="p-2">
        <SwiperCarousel />
        <FeaturedCategories />
        <DownloadApp />
        <PopularProducts />
        <DiscountProducts />
      </div>
      <Footer />
    </>
  );
};

export default Home;
