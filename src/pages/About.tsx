import CustomBtn from "../utils/CustomBtn";

const About = () => {
  return (
    <section className="bg-white text-primary-color py-16 px-6 sm:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl  tracking-wide text-primary-color font-bold">
          About Maverick Store
        </h1>
        <p className="mt-4 text-lg text-gray-800 max-w-2xl mx-auto">
          Redefining luxury shopping with elegance, quality, and trust. We’re
          more than a store we’re an experience.
        </p>
      </div>

      {/* Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
            alt="Luxury fashion store"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right - Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary-color mb-4">
            Our Story
          </h2>
          <p className="text-gray-800 font-semibold leading-relaxed mb-4">
            Since our founding, Maverick Store has been committed to curating
            the finest clothing, accessories, and lifestyle products for our
            discerning customers. We believe that fashion is not just about
            looking good, but feeling confident and empowered.
          </p>
          <p className="text-gray-800 font-semibold leading-relaxed">
            Every piece we offer is carefully selected to meet the highest
            standards of quality and style. Whether it’s a bold statement piece
            or timeless elegance, Maverick Store is your ultimate luxury
            destination.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="bg-primary-color p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-white mb-3">Quality</h3>
          <p className="text-gray-400">
            We handpick products that meet our rigorous standards for luxury,
            comfort, and durability.
          </p>
        </div>
        <div className="bg-primary-color p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-white mb-3">Elegance</h3>
          <p className="text-gray-400">
            Every collection we release is designed to embody timeless elegance
            and sophistication.
          </p>
        </div>
        <div className="bg-primary-color p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-white mb-3">Trust</h3>
          <p className="text-gray-400">
            We value your trust and ensure every purchase is backed by our
            commitment to excellence.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl sm:text-3xl  text-primary-color font-bold">
          Experience Luxury, The Maverick Way
        </h2>
        <p className="mt-3 text-gray-800 max-w-2xl mx-auto">
          From high-end fashion to exclusive collections, Maverick Store is here
          to make every purchase unforgettable.
        </p>
        <CustomBtn className="mt-6 px-8 py-3  text-black font-medium rounded-full ">
          Shop Now
        </CustomBtn>
      </div>
    </section>
  );
};

export default About;
