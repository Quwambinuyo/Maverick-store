import LandingNav from "./LandingNav";
import LandingSteps from "./LandingSteps";
import LandingSwiper from "./LandingSwiper";

const Landing = () => {
  return (
    <>
      <LandingNav />
      <LandingSwiper />
      <section className="px-14">
        <LandingSteps />
      </section>
    </>
  );
};

export default Landing;
