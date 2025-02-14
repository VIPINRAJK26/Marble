import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const slides = [
    "https://img.freepik.com/free-photo/beautiful-wedding-area-with-chandeliers-bright-arches_157027-4309.jpg?uid=R148571391&ga=GA1.1.193612807.1732337220&semt=ais_authors_boost",
    "https://img.freepik.com/premium-photo/large-room-with-fountain-chairs-with-fountain-middle_905510-23202.jpg?w=1380",
    "https://images.pexels.com/photos/10928706/pexels-photo-10928706.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683457.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_authors_boost",
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((src, index) => (
          <div key={index} className="w-full h-screen">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute top-1/2 left-[10%]  text-white">
        <h2 className="text-3xl font-bold ">Exquisite Collection of</h2>
        <h1 className="text-5xl font-bold ">
          Bathroom Interiors and Fittings
        </h1>
      </div>
      <div className="absolute hidden md:flex bottom-[10%] left-[10%] grid md:grid-cols-4  gap-10  text-white ">
        <div className="">
          <p>Most Trusted</p>
          <p>Premium Marble</p>
        </div>
        <div className="">
          <p>Floors Choosen</p>
          <p>By Your Heart's Desire</p>
        </div>
        <div className="">
          <p>Exquisite Collection of </p>
          <p>Bathroom Interiors and fittings</p>
        </div>
        <div className="">
          <p>A Pioneer Supplier of</p>
          <p>Flooring , Roofing and Sanitary Solutions</p>
        </div>
      </div>
      <div className="absolute hidden md:flex -right-14 bottom-[40%]  rotate-90 flex gap-10 text-white ">
        {["Facebook", "Instagram", "YouTube", "LinkedIn"].map((social) => (
          <a href="#" key={social} className="hover:opacity-75">
            {social}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
