import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useHero from "../../hooks/useHero";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const { hero, loading, error } = useHero();

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Error loading hero data</p>;

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

  if (!Array.isArray(hero)) return <p>Error loading hero data</p>;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel */}
      <Slider {...settings}>
        {hero?.map((slide) => (
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
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Overlay */}
            <div
              className="absolute top-1/3 left-[10%] text-white"
              style={{
                transform: `translateY(${offsetY * 0.1}px) translateY(-70%)`,
              }}
            >
              <h2 className="md:text-5xl text-3xl font-bold">{slide.title_1} </h2>
              <h1 className="md:text-3xl text-xl font-bold">{slide.title_2}</h1>
            </div>
          </div>
        ))}
      </Slider>

      {/* Social Links */}
      <div className="absolute hidden md:flex -right-14 bottom-[40%] rotate-90 gap-10 text-white">
        {[
          { name: "Facebook", url: "https://www.facebook.com/pkstone.in/" },
          { name: "Instagram", url: "https://www.instagram.com/pkst.one/" },
          { name: "YouTube", url: "https://www.youtube.com/@PKstone_pk" },
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/pk-stone/?viewAsMember=true",
          },
        ].map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hero;
