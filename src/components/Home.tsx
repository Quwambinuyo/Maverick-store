import { useSearchParams } from "react-router-dom";
import { useSidebarStore } from "../features/store";
import DiscountProducts from "./DiscountProducts";
import DownloadApp from "./DownloadApp";
import FeaturedCategories from "./FeaturedCategories";
import Footer from "./Footer";
import PopularProducts from "./PopularProducts";
import SwiperCarousel from "./SwiperCarousel";

const Home = () => {
  const [searchParams] = useSearchParams();
  const { loading } = useSidebarStore();
  const q = searchParams.get("q") || "";

  const isSearching = q.trim() !== "" || loading;

  return (
    <>
      <div className="p-2">
        {!isSearching && (
          <>
            <SwiperCarousel />
            <FeaturedCategories />
            <DownloadApp />
          </>
        )}

        <PopularProducts />
        <DiscountProducts />
      </div>
      <Footer />
    </>
  );
};

export default Home;
