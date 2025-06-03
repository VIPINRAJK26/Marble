import React, { useState } from "react";
import useGallery from "../hooks/useGallery";
import useImages from "../hooks/useImages";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const { gallery } = useGallery();
  const { image } = useImages();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (projectId) => {
    const projectImages = image.filter((img) => img.product === projectId);
    setFilteredImages(projectImages);
    setSelectedImageIndex(0); // reset to first image
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const sliderSettings = {
    dots: filteredImages.length > 1,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(filteredImages.length, 3),
    slidesToScroll: 1,
    initialSlide: selectedImageIndex,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <div>
      <div className="bg-gray-600 h-80">
        <h1 className="text-center relative top-1/2 font-bold text-7xl opacity-90 text-stone-50">
          Product Gallery
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 py-10 max-w-7xl mx-auto gap-5 px-5 md:px-0">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="rounded-lg shadow-md hover:scale-110 duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-t-lg cursor-pointer"
              onClick={() => openModal(item.id)}
            />
            <div className="p-3">
              <h1 className="font-bold text-xl text-gray-600 pb-1">
                {item.title}
              </h1>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="w-full max-w-4xl mx-auto bg-white rounded-lg  p-4 outline-none"
        overlayClassName="fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 z-50 text-gray-200 hover:text-black text-2xl font-bold"
          >
            ✖
          </button>

          <Slider {...sliderSettings}>
            {filteredImages.map((item) => (
              <div
                key={item.id}
                className="px-2 flex justify-center items-center content-center h-96"
              >
                <img
                  src={item.image}
                  alt={item.product}
                  className="rounded-md object-contain max-h-full max-w-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
