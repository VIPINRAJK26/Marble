import { useState } from "react";

const Founders = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fullText = `Mr. Sanjeev Kumar, popularly known as Saji, is the Director of PK Stone, boasting an impressive 30-year career in the natural stone industry. Based in Rajasthan, India—a hub for high-quality marble and granite—he has extensive expertise in purchasing, sales, and quality management of natural stones. His deep knowledge of materials like marble and granite has made him a trusted name in the industry, catering to both domestic and international markets. In addition to his work with PK Stone, Mr. Kumar has contributed his expertise to prestigious projects, such as Taj Group and Malabar Group, where his focus on quality and craftsmanship left a lasting impact. His ability to source, evaluate, and deliver premium natural stones has earned him a reputation for excellence and reliability. With a passion for innovation and sustainability, Mr. Kumar continues to lead PK Stone as a benchmark for quality and professionalism in the natural stone industry.`;

  // Split text into words
  const words = fullText.split(" ");

  // Number of words to show initially
  const wordLimit = 85;

  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className=" py-14">
      <h1 className="text-center font-bold text-gray-600 text-4xl pb-10 md:pb-0 underline underline-offset-5 md:no-underline ">
        Our Management
      </h1>
      <div className="md:flex max-w-6xl mx-auto pb-10  pt-10 ">
        <div className="content-center ">
          <h1 className="font-bold text-4xl text-center md:text-start text-gray-500">
            Mr.Ashraf{" "}
          </h1>
          <h2 className="font-semibold text-xl text-center md:text-start text-zinc-500 pb-3">
            ( Founder & Managing Director )
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-justify px-5 md:px-0 text-zinc-500">
            Mr. Ashraf PK, the founder of PK Stone, is a seasoned entrepreneur
            with 28 years of international experience in diverse industries,
            including supermarkets, restaurants, fuel pumps, and garments,
            primarily based in Jeddah and Dubai. His extensive expertise in
            managing and scaling businesses across multiple sectors has equipped
            him with a deep understanding of global markets and consumer needs.
            Leveraging his vast experience, Mr. Ashraf established PK Stone,
            aiming to bring innovative retail solutions and high-quality
            products to his customers. His commitment to excellence and customer
            satisfaction has made him a respected figure in the business
            community, both locally and internationally.
          </p>
        </div>
        <div className="">
          <img
            src="/Ashraf.jpg"
            alt=""
            className="md:w-[60%] w-[80%] pt-5 md:pt-0  mx-auto"
          />
        </div>
      </div>
      <hr className="border-gray-500 mt-5 md:hidden" />

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center max-w-7xl mx-auto pt-12 gap-14">
        <div>
          <img src="/Sajeev.png" alt="" className="w-[50%] mx-auto" />
          <div className=" shadow-lg pt-6 pb-5 md:pb-10 rounded-2xl mx-4">
            <h1 className="font-bold text-3xl text-gray-500 text-center pt-5">
              Mr.Sanjeev Kumar ( Saji){" "}
            </h1>
            <h2 className="font-semibold text-xl text-zinc-500 pb-3 text-center">
              Director
            </h2>
            <div className="md:w-[80%] mx-auto px-3">
              <p className="text-lg text-zinc-500 text-justify">
                {isReadMore
                  ? words.slice(0, wordLimit).join(" ") + "..."
                  : fullText}
              </p>
              <button
                onClick={toggleReadMore}
                className="text-blue-600 hover:underline mt-2"
              >
                {isReadMore ? "Read More" : "Read Less"}
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src="/Baby.png" alt="" className="w-[50%]  mx-auto" />
          <div className=" shadow-lg pt-6 pb-5 md:pb-10 rounded-2xl mx-4 ">
            <h1 className="font-bold text-3xl text-gray-500 text-center pt-5">
              Mr.Devi Das ( Baby)
            </h1>
            <h2 className="font-semibold text-xl text-zinc-500 pb-3 text-center">
              Director
            </h2>
            <p className="text-lg text-zinc-500 text-justify md:w-[80%] mx-auto px-3 ">
              Mr. Devi Das, fondly known as Baby, is keeping the position of
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
