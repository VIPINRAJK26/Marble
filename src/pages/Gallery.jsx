import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className="bg-gray-600 h-80">
        <h1 className="text-center relative top-1/2 font-bold text-6xl text-stone-50">
          Product Gallery
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 py-10 max-w-7xl mx-auto gap-5 px-5 md:px-0">
        <div className="rounded-lg shadow-md hover:scale-110 duration-300">
          <img
            src="https://img.freepik.com/free-photo/marble-tile-texture_1339-977.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
            className="rounded-t-lg"
          />
          <div className="p-3">
            <h1 className="font-bold text-xl text-gray-600 pb-1">Title</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              minima.
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-md hover:scale-110 duration-300">
          <img
            src="https://img.freepik.com/free-photo/marble-tile-texture_1339-977.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
            className="rounded-t-lg"
          />
          <div className="p-3">
            <h1 className="font-bold text-xl text-gray-600 pb-1">Title</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              minima.
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-md hover:scale-110 duration-300">
          <img
            src="https://img.freepik.com/free-photo/marble-tile-texture_1339-977.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
            className="rounded-t-lg"
          />
          <div className="p-3">
            <h1 className="font-bold text-xl text-gray-600 pb-1">Title</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              minima.
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-md hover:scale-110 duration-300">
          <img
            src="https://img.freepik.com/free-photo/marble-tile-texture_1339-977.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid"
            alt=""
            className="rounded-t-lg"
          />
          <div className="p-3">
            <div>
              <h1 className="font-bold text-xl text-gray-600 pb-1">Title</h1>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              minima.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
