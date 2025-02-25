import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.5); // Adjust parallax speed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
  };

  const sliderData = [
    {
      id: 1,
      title1: "Elevate Your Home’s Aesthetic",
      title2: "with Our Stunning Stone Selection!",
      img: "https://img.freepik.com/free-photo/beautiful-wedding-area-with-chandeliers-bright-arches_157027-4309.jpg?uid=R148571391&ga=GA1.1.193612807.1732337220&semt=ais_authors_boost",
    },
    {
      id: 2,
      title1: "Transform Your Space",
      title2: "with Timeless Elegance",
      img: "https://img.freepik.com/premium-photo/large-room-with-fountain-chairs-with-fountain-middle_905510-23202.jpg?w=1380",
    },
    {
      id: 3,
      title1: "Durable, Beautiful, Unmatched –",
      title2: "The Perfect Stone for Every Surface!",
      img: "https://images.pexels.com/photos/10928706/pexels-photo-10928706.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title1: "From Classic to Contemporary,",
      title2: "Find the Perfect Stone for Your Home!",
      img: "https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683457.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_authors_boost",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel */}
      <Slider {...settings}>
        {sliderData.map((slide) => (
          <div key={slide.id} className="relative w-full h-screen">
            {/* Image */}
            <div
              className="w-full h-screen"
              style={{
                transform: `translateY(${offsetY * 0.2}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Overlay */}
            <div
              className="absolute top-1/2 left-[10%] text-white"
              style={{
                transform: `translateY(${offsetY * 0.1}px) translateY(-50%)`,
              }}
            >
              <h2 className="text-3xl font-bold">{slide.title1} </h2>
              <h1 className="text-5xl font-bold">{slide.title2}</h1>
            </div>
          </div>
        ))}
      </Slider>

      {/* Social Links */}
      <div className="absolute hidden md:flex -right-14 bottom-[40%] rotate-90 gap-10 text-white">
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
