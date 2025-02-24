const About = () => {
  return (
    <div className="">
      <div className="  ">
        <div className="bg-gray-600 h-80">
          <h1 className="text-center relative top-1/2 font-bold text-6xl text-stone-50">
            About Us
          </h1>
        </div>
        <p className="md:w-[70%] md:text-center text-justify px-5 md:px-0 m-auto font-medium text-lg text-gray-800 pt-10  ">
          <span className="bg-gray-200 leading-loose p-1 ">
            The management team of PK Stone comprises seasoned professionals
            with decades of expertise in the natural stone industry. Led by the
            team brings over 30 years of experience in sourcing, sales, and
            quality management of premium marbles and granites. With a strong
            foundation in Rajasthan, India, known for its rich stone reserves,
            the team specializes in all kinds of natural stones such as Marble,
            Granites & Tiles. Their collective vision, dedication to quality,
            and customer-centric approach have positioned PK Stone as a trusted
            name in the natural stone industry, delivering excellence and
            innovation in every project
          </span>
        </p>
      </div>
      <div className="bg-zinc-300 max-w-7xl mx-auto md:rounded-2xl mt-12 p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-6 md:pl-20">
          <div className="content-center">
            <h1 className="text-4xl font-bold text-gray-700 pb-6">
              We Assure Quality & Beauty{" "}
            </h1>
            <p className="text-gray-600 text-lg text-justify">
              PK Stones is synonymous with superior quality, offering an
              exquisite range of natural stones, including marble, granite,
              Kotta stones, and limestone. PK Stones meticulously sources
              materials from globally renowned quarries, ensuring durability,
              elegance, and timeless beauty in every product. Each stone is
              crafted to perfection, meeting the highest standards of quality
              and precision. Whether for countertops, flooring, or decorative
              applications, PK Stones delivers unmatched craftsmanship and
              reliability. Their commitment to excellence and customer
              satisfaction makes them a trusted choice for homeowners,
              designers, and builders seeking premium natural stone solutions
              that elevate any space.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/premium-quality-product-golden-label-design_1017-12393.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
              alt=""
              className="md:w-[70%] md:rounded-4xl rounded-xl pt-8 md:pt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
