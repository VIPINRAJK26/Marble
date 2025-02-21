import { motion, useScroll, useTransform } from "framer-motion";

const Ourstory = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]); // Adjusted for smooth movement

  return (
    <div
      className="md:relative min-h-screen bg-fixed bg-center bg-cover flex items-center justify-center px-4 pt-7 md:pt-0 md:px-0"
      id="about"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/realistic-white-golden-geometric-background_79603-2032.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_authors_boost')",
      }}
    >
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-20 w-full max-w-7xl mx-auto">
        {/* Left Text Content */}
        <div
          className="md:w-[90%] m-auto content-center text-center md:text-left"
          data-aos="zoom-in"
          data-aos-duration="1100"
        >
          <p className="font-semibold text-xl text-gray-500 relative inline-block">
            OUR STORY
            <span className="block w-12 h-0.5 bg-gray-500 mt-1 mx-auto md:mx-0"></span>
          </p>

          <h1 className="font-bold text-white my-4 text-3xl p-4 bg-gray-400 inline-block">
            Over 30 years of Experience in Natural Stone Management
          </h1>

          <p className="font-medium text-md text-gray-900 text-justify md:px-0 px-2">
            PK Stones is a trusted name in the marble and granite industry,
            boasting years of expertise as a leading distributor and dealer.
            Specializing in high-quality natural stones, the company offers an
            extensive range of premium marble, granite, and other stone products
            tailored for residential, commercial, and architectural projects.
            With a commitment to excellence, PK Stones sources materials from
            renowned quarries worldwide, ensuring durability, elegance, and
            timeless beauty in every piece
          </p>

          <p className="font-medium text-md text-gray-900 text-justify md:px-0 px-2 mt-2">
            Their skilled team provides advanced solutions, from selection and
            customization to installation, catering to the unique needs of
            clients. Known for their reliability, craftsmanship, and
            customer-centric approach, PK Stones has built a strong reputation
            for delivering exceptional quality and service. Whether it’s for
            countertops, flooring, or decorative accents, PK Stones transforms
            spaces into stunning masterpieces, making them a preferred choice
            for designers, builders, and homeowners alike
          </p>
        </div>

        {/* Right Images */}
        <div className="md:relative md:flex justify-center pt-10 md:pt-0 items-center md:gap-6 gap-3 md:h-auto top-10">
          <motion.img
            src="https://img.freepik.com/free-photo/door-opening-revealing-beautiful-city_23-2149768547.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_authors_boost"
            alt=""
            className=" md:w-[350px] mx-auto border-4 border-white shadow-lg md:relative md:translate-x-16"
            style={{ y }}
          />
          <motion.img
            src="https://img.freepik.com/free-photo/low-angle-tall-buildings-with-grey-clouds_23-2148230381.jpg?ga=GA1.1.1208105082.1712396076"
            alt=""
            className=" md:w-[350px] mx-auto border-4 border-white shadow-lg md:-translate-x-16 md:translate-y-50 z-10"
            style={{ y }}
          />
        </div>
      </div>
    </div>
  );
};

export default Ourstory;
