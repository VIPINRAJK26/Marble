import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const sliderData = [
  {
    title: "Indian Marbles",
    image:
      "https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976582.jpg?t=st=1739598642~exp=1739602242~hmac=53ebac51b9627c8719d34dc7b44bdefd6dde92162c96995e301a4250277d29f8&w=740",
  },
  {
    title: "Indian Granites",
    image:
      "https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976582.jpg?t=st=1739598642~exp=1739602242~hmac=53ebac51b9627c8719d34dc7b44bdefd6dde92162c96995e301a4250277d29f8&w=740",
  },
  {
    title: "Italian Marbles",
    image:
      "https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976582.jpg?t=st=1739598642~exp=1739602242~hmac=53ebac51b9627c8719d34dc7b44bdefd6dde92162c96995e301a4250277d29f8&w=740",
  },
  {
    title: "Kotta Stone",
    image:
      "https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976582.jpg?t=st=1739598642~exp=1739602242~hmac=53ebac51b9627c8719d34dc7b44bdefd6dde92162c96995e301a4250277d29f8&w=740",
  },
  {
    title: "Jaisalmer Stone",
    image:
      "https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976582.jpg?t=st=1739598642~exp=1739602242~hmac=53ebac51b9627c8719d34dc7b44bdefd6dde92162c96995e301a4250277d29f8&w=740",
  },
  {
    title: "Line Stone",
    image:
      "https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976582.jpg?t=st=1739598642~exp=1739602242~hmac=53ebac51b9627c8719d34dc7b44bdefd6dde92162c96995e301a4250277d29f8&w=740",
  },
  // {
  //   title: "Tiles",
  //   images: [
  //     "https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976582.jpg?t=st=1739598642~exp=1739602242~hmac=53ebac51b9627c8719d34dc7b44bdefd6dde92162c96995e301a4250277d29f8&w=740",
  //     "https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976582.jpg?t=st=1739598642~exp=1739602242~hmac=53ebac51b9627c8719d34dc7b44bdefd6dde92162c96995e301a4250277d29f8&w=740",
  //     "https://img.freepik.com/free-photo/beautiful-kitchen-interior-design_23-2150976582.jpg?t=st=1739598642~exp=1739602242~hmac=53ebac51b9627c8719d34dc7b44bdefd6dde92162c96995e301a4250277d29f8&w=740",
  //   ],
  // },
];

const FeaturedProducts = () => (
  <div id="products" className="md:py-14 pb-6 ">
    <div>
      <h1 className="text-center font-bold text-gray-700 text-3xl">
        Product Gallery
      </h1>
    </div>
    <div className=" gap-4 space-y-4 pt-7 md:max-w-7xl mx-auto px-5 md:px-0">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} 
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }, 
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={2000}
        className="w-full"
      >
        {sliderData.map((category, index) => (
          <SwiperSlide key={index}>
            <div className=" bg-white rounded-md shadow-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-[550px] "
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center   bg-opacity-50 px-3 py-1 ">
                <h1 className="font-bold pb-2 text-xl">{category.title}</h1>
                <button className="bg-transparent border-white border-2 text-white hover:bg-amber-500 px-3 py-1 rounded-4xl">
                  See More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default FeaturedProducts;
