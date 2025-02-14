import React from "react";
import Hero from "../Components/Home/Hero";
import Ourstory from "../Components/Home/OurStory";
import FeaturedProducts from "../Components/Home/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="">
        <Ourstory />
      </div>
      <div className="">
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Home;
