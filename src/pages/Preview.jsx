import { useParams } from "react-router-dom";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
// import PreviewData from "../Components/Preview/PreviewData";
import useProducts from "../hooks/useProducts";
import usePreview from "../hooks/usePreview";

Modal.setAppElement("#root");

const Preview = () => {
  const { products } = useProducts();
  const { preview } = usePreview()
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { categoryName } = useParams();

  // const preview = PreviewData[categoryName] || {};
  const filteredProducts =
    products?.filter((item) => item.category === categoryName) || [];

  const filteredPreview = preview?.find((item) => item.category === categoryName);

  console.log(filteredPreview, "filteredPreview");
  console.log(filteredPreview && filteredPreview.preview_image); 


  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: selectedImageIndex,
  };

  return (
    <div className="container mx-auto bg-zinc-100 ">
      <div>
        {filteredPreview ? (
          <div key={filteredPreview.id}>
            <img
              src={filteredPreview.preview_image}
              alt={categoryName}
              className="w-full h-100 object-cover mb-2 rounded"
            />
            <h1
              className="typing-text preview_text text-4xl md:text-5xl font-bold text-white relative -top-[170px] md:-left-100 text-center 
after:content-[''] after:absolute md:after:top-0 after:left-0 md:after:w-2/3 after:w-full after:h-full after:bg-black after:opacity-40 
overflow-hidden whitespace-nowrap border-r-2 border-white animate-typing"
            >
              {filteredPreview.category
                .replace(/-/g, " ") // Replace hyphens with spaces
                .replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
              {/* Capitalize first letter of each word */}
            </h1>
          </div>
        ) : (
          <p>No preview available for this category.</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-32 md:py-10 bg-transparent">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={product.id} className="p-3 rounded-lg shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-2 rounded cursor-pointer"
                onClick={() => openModal(index)} // Open modal on click
              />
              <h3 className="text-lg text-gray-600 font-semibold">
                {product.name}
              </h3>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}

        {/* Modal for Image Slider */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="relative top-20 md:left-1/4 bg-white bg-opacity-10"
          overlayClassName="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur "
        >
          <div className=" max-w-2xl md:h-[500px] rounded-md  w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              ✖
            </button>

            <Slider {...sliderSettings}>
              {filteredProducts.map((product) => (
                <div key={product.id} className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <h3 className="text-center font-bold text-white mt-2">
                    {product.name}
                  </h3>
                </div>
              ))}
            </Slider>
          </div>
        </Modal>
      </div>
      <div className="flex justify-center">
        <button className="p-3 rounded-4xl shadow-md hover:scale-110 text-stone-50 duration-300 hover:from-blue-500 hover:to-blue-700 bg-gradient-to-r from-blue-600 to-blue-500 mb-10">
          Contact For More Queries
        </button>
      </div>
    </div>
  );
};

export default Preview;
