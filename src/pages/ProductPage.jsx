import React from "react";

const ProductPage = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-400">
        <div className="img">
          <img
            src="https://img.freepik.com/free-vector/rhombus-copper-frame-marble-background_53876-112365.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
          />
        </div>
        <div className="content-center text-white py-10 md:py-0">
          <h1 className="font-bold text-white text-3xl pb-5 text-center md:text-start">Description</h1>
          <p className="text-justify w-[85%] md:mx-0 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            distinctio minus molestiae, sit mollitia cupiditate vero nisi
            dolore, quisquam earum quas cum. Expedita libero porro distinctio
            magnam iusto id iure unde. Culpa sit nulla, ipsam laboriosam
            inventore minima distinctio error maiores, architecto, ex blanditiis
            atque ad hic. Cumque, quis illum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
