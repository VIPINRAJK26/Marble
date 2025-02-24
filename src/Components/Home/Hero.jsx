import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.5); // Adjust speed of parallax effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div
            key={index}
            className="w-full h-screen"
            style={{
              transform: `translateY(${offsetY * 0.2}px)`, // Parallax effect
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <div
        className="absolute top-1/2 left-[10%] text-white"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }} // Slow parallax for text
      >
        <h2 className="text-3xl font-bold">Elevate Your Home’s Aesthetic </h2>
        <h1 className="text-5xl font-bold">
          with Our Stunning Stone Selection!
        </h1>
      </div>
      {/* <div
        className="absolute hidden md:flex bottom-[10%] left-[10%] gap-10 text-white"
        style={{ transform: `translateY(${offsetY * 0.15}px)` }} // Slight parallax for content
      >
        <div>
          <p>Transform Your Space </p>
          <p>with Timeless Elegance</p>
        </div>
        <div>
          <p>Durable, Beautiful, Unmatched- </p>
          <p>The Perfect Stone for Every Surface!</p>
        </div>
        <div>
          <p>From Classic to Contemporary,</p>
          <p>Find the Perfect Stone for Your Home!</p>
        </div>
        <div>
          <p>Timeless Beauty, Modern Appeal</p>
          <p>Discover Our Stone Collection!</p>
        </div>
      </div> */}
      <div className="absolute hidden md:flex -right-14 bottom-[40%] rotate-90  gap-10 text-white">
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
