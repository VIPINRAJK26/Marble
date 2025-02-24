const About = () => {
  return (
    <div className="">
      <div className=" bg-no-repeat h-[50vh] bg-cover bg-gradient-to-b from-stone-400 to-gray-200">
        <div className="relative content-center top-1/3 ">
          <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r pb-5 from-gray-900 to-gray-500">
            About Us
          </h1>
          <p className="w-[70%] text-center m-auto font-medium text-md text-gray-700 ">
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
          </p>
        </div>
      </div>
      <div className="bg-zinc-300 max-w-7xl mx-auto rounded-2xl mt-16 p-0">
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
              className="md:w-[70%] rounded-4xl pt-8 md:pt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
