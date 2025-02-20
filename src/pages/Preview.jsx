import { useParams } from "react-router-dom";

const previewData = {
  "indian-marbles": {
    image:
      "https://img.freepik.com/premium-photo/vintage-textured-marble-background_480962-6481.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    name: "INDIAN MARBLES",
  },
  "indian-granites": {
    image:
      "https://img.freepik.com/premium-photo/vintage-textured-marble-background_480962-6481.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    name: "INDIAN GRANITES",
  },
  "italian-marbles": {
    image:
      "https://img.freepik.com/premium-photo/vintage-textured-marble-background_480962-6481.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    name: "ITALIAN MARBLES",
  },
  "kotta-stone": {
    image:
      "https://img.freepik.com/premium-photo/vintage-textured-marble-background_480962-6481.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    name: "KOTTA STONE",
  },
  "jaisalmer-stone": {
    image:
      "https://img.freepik.com/premium-photo/vintage-textured-marble-background_480962-6481.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    name: "JAISALMER STONE",
  },
};

const productsData = {
  "indian-marbles": [
    {
      id: 1,
      name: "Makrana Marble",
      image:
        "https://img.freepik.com/free-photo/marble-patterned-texture-background-marbles-thailand-abstract-natural-marble-black-white-gray-design_1253-1077.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Morchana Marble",
      image:
        "https://img.freepik.com/free-photo/marble-patterned-texture-background-marbles-thailand-abstract-natural-marble-black-white-gray-design_1253-1077.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 3,
      name: "Nizarna Marble",
      image:
        "https://img.freepik.com/free-photo/marble-patterned-texture-background-marbles-thailand-abstract-natural-marble-black-white-gray-design_1253-1077.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 4,
      name: "Talai Udaipur ",
      image:
        "https://img.freepik.com/free-photo/marble-patterned-texture-background-marbles-thailand-abstract-natural-marble-black-white-gray-design_1253-1077.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 5,
      name: "Indian Pink Marble",
      image:
        "https://img.freepik.com/free-photo/marble-patterned-texture-background-marbles-thailand-abstract-natural-marble-black-white-gray-design_1253-1077.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 6,
      name: "Green",
      image:
        "https://img.freepik.com/free-photo/marble-patterned-texture-background-marbles-thailand-abstract-natural-marble-black-white-gray-design_1253-1077.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
  ],
  "indian-granites": [
    { id: 7, name: "Black Galaxy", image: "/images/black-galaxy.jpg" },
    { id: 8, name: "Tan ", image: "/images/tan-brown.jpg" },
    { id: 9, name: "Tan ", image: "/images/tan-brown.jpg" },
    { id: 10, name: "Tan ", image: "/images/tan-brown.jpg" },
  ],
  "italian-marbles": [
    { id: 11, name: "Carrara White", image: "/images/carrara.jpg" },
  ],
  "kotta-stone": [
    { id: 12, name: "Kotta Brown", image: "/images/kotta-brown.jpg" },
    { id: 13, name: "Kotta Green", image: "/images/kotta-green.jpg" },
    { id: 14, name: "Kotta Green", image: "/images/kotta-green.jpg" },
    { id: 15, name: "Kotta Green", image: "/images/kotta-green.jpg" },
  ],
  "jaisalmer-stone": [
    { id: 16, name: "Yellow Jaisalmer", image: "/images/yellow-jaisalmer.jpg" },
    { id: 17, name: "Yellow Jaisalmer", image: "/images/yellow-jaisalmer.jpg" },
    { id: 18, name: "Yellow Jaisalmer", image: "/images/yellow-jaisalmer.jpg" },
    { id: 19, name: "Red Jaisalmer", image: "/images/red-jaisalmer.jpg" },
  ],
  "lime-stones": [
    { id: 20, name: "Blue Limestone", image: "/images/blue-limestone.jpg" },
    { id: 21, name: "Tandoor Yellow", image: "/images/tandoor-yellow.jpg" },
    { id: 22, name: "Tandoor Yellow", image: "/images/tandoor-yellow.jpg" },
    { id: 23, name: "Tandoor Yellow", image: "/images/tandoor-yellow.jpg" },
  ],
  tiles: [{ id: 35, name: "Glossy Tile", image: "/images/glossy-tile.jpg" }],
};

const Preview = () => {
  const { categoryName } = useParams();
  const products = productsData[categoryName] || [];
  const preview = previewData[categoryName] || {};

  console.log(preview);

  return (
    <div className="container mx-auto   bg-zinc-100 ">
      <div>
        {preview.image && (
          <div>
            <img
              src={preview.image}
              alt={categoryName}
              className="w-full h-full object-cover mb-2 rounded"
            />
            <h1
              className="typing-text preview_text text-5xl font-bold text-white relative -top-[170px] -left-100 text-center 
  after:content-[''] after:absolute after:top-0 after:left-0 after:w-2/3 after:h-full after:bg-black after:opacity-40 
  overflow-hidden whitespace-nowrap border-r-2 border-white animate-typing"
            >
              {preview.name}
            </h1>
          </div>
        )}
      </div>
      <h1 className="text-center font-bold text-3xl text-gray-500 capitalize ">
        <span className="bg-stone-200 py-2 px-5 shadow rounded-xl">products in {categoryName}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-32 py-10">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className=" p-3 rounded-lg shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <h3 className="text-lg text-gray-600 font-semibold">
                {product.name}
              </h3>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Preview;
