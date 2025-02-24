import React from "react";
import Hero from "../Components/Home/Hero";
import Ourstory from "../Components/Home/OurStory";
import FeaturedProducts from "../Components/Home/FeaturedProducts";
import Founders from "../Components/Home/Founders";
import AboutUs from "../Components/Home/About";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="" id="about">
        <Ourstory />
      </div>
      <div className="" id="gallery">
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Home;
