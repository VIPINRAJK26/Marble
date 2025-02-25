import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%", // Starts when 80% of the element is in view
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="bg-stone-50">
      <div className="bg-gray-600 h-80">
        <h1 className="text-center relative top-1/2 font-bold text-7xl opacity-90 text-stone-50">
          P K Stone Services
        </h1>
      </div>
      <div className="md:space-y-5">
        <div className="flex justify-center py-10 ">
          <div className="md:flex rounded-md max-w-6xl gap-10">
            <div ref={boxRef}>
              <img
                src="https://img.freepik.com/free-photo/flat-lay-stone-collection_23-2148874509.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
                alt=""
                className="w-[90%] mx-auto md:w-full rounded-3xl"
              />
            </div>
            <div className="pl-4 content-center">
              <h1 className="text-3xl text-gray-600 text-center font-bold pb-5 pt-5">
                Project Survey and Demand assent
              </h1>
              <p className="max-w-4xl text-center text-gray-500 pb-5 md:pb-0">
                We offer expert Natural Stone Project Survey and Product
                Assessment services. Our team evaluates site requirements,
                recommends the best materials, and ensures quality compliance.
                With decades of experience, we provide tailored solutions for
                residential, commercial, and industrial projects, delivering
                precision, durability, and aesthetic excellence in every
                assessment.
              </p>
              <div className="flex justify-center pt-5">
                <button className="text-center p-3 shadow-md rounded-4xl bg-gradient-to-r from-gray-300 text-zinc-50 to-stone-400 hover:scale-110 hover:from-stone-400 hover:to-gray-400 duration-500 font-semibold">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 ">
          <div className="md:flex rounded-md max-w-6xl gap-10">
            <div className="pl-4 content-center">
              <h1 className="text-3xl text-gray-600 text-center font-bold pb-5">
                Product Purchasing and delivery
              </h1>
              <p className="max-w-4xl text-center text-gray-500 pb-5 md:pb-0">
                Also, we specialize in Natural Stone Product Purchasing and
                Delivery, sourcing premium marbles and granites directly from
                quarries. We ensure high-quality materials, competitive pricing,
                and timely delivery worldwide. Our seamless process guarantees
                customer satisfaction, making us a trusted partner for all
                natural stone needs.
              </p>
              <div className="flex justify-center pt-5 pb-10">
                <button className="text-center p-3 shadow-md rounded-4xl bg-gradient-to-r from-gray-300 text-zinc-50 to-stone-400 hover:scale-110 hover:from-stone-400 hover:to-gray-400 duration-500 font-semibold">
                  Know More
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/flat-lay-stone-collection_23-2148874509.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
                alt=""
                className="w-[90%] mx-auto md:w-full rounded-3xl"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 ">
          <div className="md:flex rounded-md max-w-6xl gap-10">
            <div>
              <img
                src="https://img.freepik.com/free-photo/flat-lay-stone-collection_23-2148874509.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
                alt=""
                className="w-[90%] mx-auto md:w-full rounded-3xl"
              />
            </div>
            <div className="pl-4 content-center">
              <h1 className="text-3xl text-gray-600 text-center font-bold pb-5 pt-5">
                Natural stone crafting
              </h1>
              <p className="max-w-4xl text-center text-gray-500 pb-5 md:pb-0">
                PK Stone excels in Natural Stone Crafting and Interior Design,
                creating stunning spaces with premium marbles and granites. Our
                skilled artisans craft bespoke designs, from elegant flooring to
                intricate wall claddings, blending functionality with
                aesthetics. Transform your interiors with our timeless,
                high-quality stone solutions tailored to your vision.
              </p>
              <div className="flex justify-center pt-5">
                <button className="text-center p-3 shadow-md rounded-4xl bg-gradient-to-r from-gray-300 text-zinc-50 to-stone-400 hover:scale-110 hover:from-stone-400 hover:to-gray-400 duration-500 font-semibold">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 ">
          <div className="md:flex rounded-md max-w-6xl gap-10">
            <div className="pl-4 content-center">
              <h1 className="text-3xl text-gray-600 text-center font-bold pb-5">
                Maintenance & Refurnishing
              </h1>
              <p className="max-w-4xl text-center m-auto text-gray-500 pb-5 md:pb-0">
                We also providing service of expert Natural Stone Project
                Maintenance and Refurnishing services for both domestic and
                commercial projects. We restore the beauty and functionality of
                marble and granite surfaces through polishing, sealing, and
                repairs. Our team ensures long-lasting results, preserving the
                elegance and durability of your natural stone installations.
              </p>
              <div className="flex justify-center pt-5 pb-10">
                <button className="text-center p-3 shadow-md rounded-4xl bg-gradient-to-r from-gray-300 text-zinc-50 to-stone-400 hover:scale-110 hover:from-stone-400 hover:to-gray-400 duration-500 font-semibold">
                  Know More
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/flat-lay-stone-collection_23-2148874509.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
                alt=""
                className="w-[90%] mx-auto md:w-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
