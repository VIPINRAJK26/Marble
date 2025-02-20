import { useState } from "react";

const Founders = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const founders = [
    {
      name: "Mr.Ashraf ",
      role: "Founder & Managing Director ",
      img: "https://img.freepik.com/free-photo/cheerful-senior-businessman-crossed-arms-gesture_53876-105185.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
      description:
        "Mr. Ashraf PK, the founder of PK Store, is a seasoned entrepreneur with 28 years of international experience in diverse industries, including supermarkets, restaurants, fuel pumps, and garments, primarily based in Jeddah and Dubai. His extensive expertise in managing and scaling businesses across multiple sectors has equipped him with a deep understanding of global markets and consumer needs. Leveraging his vast experience, Mr. Ashraf established PK Store, aiming to bring innovative retail solutions and high-quality products to his customers. His commitment to excellence and customer satisfaction has made him a respected figure in the business community, both locally and internationally.",
    },
    {
      name: "Mr.Sanjeev Kumar ( Saji) ",
      role: "Director",
      img: "https://img.freepik.com/free-photo/cheerful-senior-businessman-crossed-arms-gesture_53876-105185.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
      description:
        "Mr. Sanjeev Kurar, popularly known as Saji, is the Director of PK Stone, boasting an impressive 30-year career in the natural stone industry. Based in Rajasthan, India—a hub for high-quality marble and granite—he has extensive expertise in purchasing, sales, and quality management of natural stones. His deep knowledge of materials like marble and granite has made him a trusted name in the industry, catering to both domestic and international markets. In addition to his work with PK Stone, Mr. Kurar has contributed his expertise to prestigious projects, including collaborations with Taj Hotels and Malabar Group, where his focus on quality and craftsmanship left a lasting impact. His ability to source, evaluate, and deliver premium natural stones has earned him a reputation for excellence and reliability. With a passion for innovation and sustainability, Mr. Kurar continues to lead PK Stone as a benchmark for quality and professionalism in the natural stone industry.",
    },
    {
      name: "Mr.Devi Das ( Boby) ",
      role: "Director",
      img: "https://img.freepik.com/free-photo/cheerful-senior-businessman-crossed-arms-gesture_53876-105185.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
      description:
        "Mr. Devi Das, fondly known as Boby, is keeping the position of Director of PK Stone with over three decades of experience since 1992. Specializing in the sales and purchasing of marbles and granites, he has established himself as a trusted expert in the industry. He is particularly renowned for his in-depth knowledge of Makrana Marbles, a premium variety known for its elegance and durability. His expertise, dedication, and commitment to quality have made him a respected figure in the natural stone trade, catering to both domestic and international markets while maintaining a strong reputation for excellence.",
    },
  ];

  return (
    <div className="bg-gray-50 py-14">
      <h1 className="text-center font-bold text-gray-700 text-3xl">Founders</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10 md:px-32 px-5">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="bg-white rounded-md hover:scale-105 duration-300 w-[95%]"
          >
            <img
              src={founder.img}
              alt={founder.name}
              className="rounded-sm w-full"
            />
            <div className="p-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <h1 className="font-bold text-xl">{founder.name}</h1>
                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              <p className="text-gray-500">{founder.role}</p>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-screen opacity-100 py-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{founder.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
