import { useState } from "react";

const Founders = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" py-14">
      <h1 className="text-center font-bold text-gray-600 text-4xl ">
        Our Management
      </h1>
      <div className="md:flex max-w-6xl mx-auto pb-10  ">
        <div className="content-end ">
          <h1 className="font-bold text-4xl text-center md:text-start text-gray-500">
            Mr.Ashraf{" "}
          </h1>
          <h2 className="font-semibold text-xl text-center md:text-start text-zinc-500 pb-3">
            ( Founder & Managing Director )
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-justify md:text-start px-5 md:px-0 text-zinc-500">
            Mr. Ashraf PK, the founder of PK Store, is a seasoned entrepreneur
            with 28 years of international experience in diverse industries,
            including supermarkets, restaurants, fuel pumps, and garments,
            primarily based in Jeddah and Dubai. His extensive expertise in
            managing and scaling businesses across multiple sectors has equipped
            him with a deep understanding of global markets and consumer needs.
            Leveraging his vast experience, Mr. Ashraf established PK Store,
            aiming to bring innovative retail solutions and high-quality
            products to his customers. His commitment to excellence and customer
            satisfaction has made him a respected figure in the business
            community, both locally and internationally.
          </p>
        </div>
        <div className="">
          <img
            src="https://img.freepik.com/premium-photo/portrait-handsome-smiling-man-against-white_252591-2702.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
            className="w-[85%]  mx-auto"
          />
        </div>
      </div>
      <hr className="border-gray-500 mt-5 md:hidden" />

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center max-w-7xl mx-auto pt-12 gap-14">
        <div>
          <img
            src="https://img.freepik.com/premium-photo/portrait-handsome-smiling-man-against-white_252591-2702.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
            className="w-[50%] mx-auto"
          />
          <div className=" shadow-lg pt-6 pb-10 rounded-2xl">
            <h1 className="font-bold text-4xl text-gray-500 text-center pt-5">
              Mr.Sanjeev Kumar ( Saji){" "}
            </h1>
            <h2 className="font-semibold text-xl text-zinc-500 pb-3 text-center">
              Director
            </h2>
            <p className="text-lg text-zinc-500 text-justify w-[80%] mx-auto">
              Mr. Sanjeev Kurar, popularly known as Saji, is the Director of PK
              Stone, boasting an impressive 30-year career in the natural stone
              industry. Based in Rajasthan, India—a hub for high-quality marble
              and granite—he has extensive expertise in purchasing, sales, and
              quality management of natural stones. His deep knowledge of
              materials like marble and granite has made him a trusted name in
              the industry, catering to both domestic and international markets.
              In addition to his work with PK Stone, Mr. Kurar has contributed
              his expertise to prestigious projects, including collaborations
              with Taj Hotels and Malabar Group, where his focus on quality and
              craftsmanship left a lasting impact. His ability to source,
              evaluate, and deliver premium natural stones has earned him a
              reputation for excellence and reliability. With a passion for
              innovation and sustainability, Mr. Kurar continues to lead PK
              Stone as a benchmark for quality and professionalism in the
              natural stone industry.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-photo/portrait-handsome-smiling-man-against-white_252591-2702.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
            className="w-[50%]  mx-auto"
          />
          <div className=" shadow-lg pt-6 pb-10 rounded-2xl">
            <h1 className="font-bold text-4xl text-gray-500 text-center pt-5">
              Mr.Devi Das ( Boby)
            </h1>
            <h2 className="font-semibold text-xl text-zinc-500 pb-3 text-center">
              Director
            </h2>
            <p className="text-lg text-zinc-500 text-justify w-[80%] mx-auto">
              Mr. Devi Das, fondly known as Boby, is keeping the position of
              Director of PK Stone with over three decades of experience since
              1992. Specializing in the sales and purchasing of marbles and
              granites, he has established himself as a trusted expert in the
              industry. He is particularly renowned for his in-depth knowledge
              of Makrana Marbles, a premium variety known for its elegance and
              durability. His expertise, dedication, and commitment to quality
              have made him a respected figure in the natural stone trade,
              catering to both domestic and international markets while
              maintaining a strong reputation for excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
