import { motion, useScroll, useTransform } from "framer-motion";

const Ourstory = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <div
      className="relative h-screen bg-fixed bg-center bg-cover"
      id="about"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/realistic-white-golden-geometric-background_79603-2032.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_authors_boost')",
      }}
    >
      <div className="md:absolute px-4 md:px-0 inset-0 flex items-center justify-center text-black ">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div
            className="md:w-[60%] m-auto content-center "
            data-aos="zoom-in"
            data-aos-duration="1100"
          >
            <p className="font-semibold text-xl text-gray-500">OUR STORY</p>
            <h1 className="font-bold text-white my-2 text-3xl p-2 bg-gray-400">
              28 Years of Building Legacy in Excellent Home Solutions
            </h1>
            <p className="font-medium text-md text-gray-900 md:px-0 px-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              iste voluptatibus quos expedita deserunt illo modi exercitationem
              similique laudantium ex esse soluta eaque, nobis reiciendis
              aliquam nesciunt vero quasi tempore quisquam sint ea non earum
              corporis. Reiciendis quia sint tenetur quod ea praesentium eius
              quos! Earum quae tempora rem facere, doloribus veritatis maiores.
              Doloremque adipisci necessitatibus eum aliquam. Nobis accusamus
              illo odit optio tempore pariatur non ab culpa eligendi animi
              minima ut, est vel neque, assumenda eveniet aliquid quia velit
              aspernatur dolor. Assumenda fuga explicabo consectetur magnam,
              nesciunt voluptatibus dolorem illo, inventore, dolor perspiciatis
              quibusdam voluptates animi repudiandae tempore est.
            </p>
          </div>
          <div className="md:flex justify-center">
            <div>
              <img
                src="https://img.freepik.com/free-photo/door-opening-revealing-beautiful-city_23-2149768547.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_authors_boost"
                alt=""
                className="w-[500px] border-10 border-white"
              />
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/low-angle-tall-buildings-with-grey-clouds_23-2148230381.jpg?ga=GA1.1.1208105082.1712396076"
                alt=""
                className="w-[500px]  md:-translate-x-[50%] z-20 relative md:translate-y-[80%] border-10 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourstory;
