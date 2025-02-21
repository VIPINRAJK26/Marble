import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
    {
      id: 7,
      name: "Pure jet Black ",
      image:
        "https://img.freepik.com/free-photo/black-marble-texture-background_24972-2298.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 8,
      name: "Tan Brown  ",
      image:
        "https://img.freepik.com/free-photo/black-marble-texture-background_24972-2298.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 9,
      name: "Steel Grey  ",
      image:
        "https://img.freepik.com/free-photo/black-marble-texture-background_24972-2298.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 10,
      name: "Black Galey   ",
      image:
        "https://img.freepik.com/free-photo/black-marble-texture-background_24972-2298.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
  ],
  "italian-marbles": [
    {
      id: 11,
      name: "Types of Italian Marbles ",
      image:
        "https://img.freepik.com/free-photo/closeup-marble-textured-background_53876-31896.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
  ],
  "kotta-stone": [
    {
      id: 12,
      name: " Yellow",
      image:
        "https://img.freepik.com/free-photo/concrete-floor_1127-375.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 13,
      name: " Green",
      image:
        "https://img.freepik.com/free-photo/concrete-floor_1127-375.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 14,
      name: " Gray",
      image:
        "https://img.freepik.com/free-photo/concrete-floor_1127-375.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 15,
      name: " Brown",
      image:
        "https://img.freepik.com/free-photo/concrete-floor_1127-375.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
  ],
  "jaisalmer-stone": [
    {
      id: 16,
      name: "Etta Gold",
      image:
        "https://img.freepik.com/free-photo/mineral-wall-rock-hard-strong_1253-846.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 17,
      name: "Floury Gold",
      image:
        "https://img.freepik.com/free-photo/mineral-wall-rock-hard-strong_1253-846.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 18,
      name: "Teakwood ",
      image:
        "https://img.freepik.com/free-photo/mineral-wall-rock-hard-strong_1253-846.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 19,
      name: "Mulsagar",
      image:
        "https://img.freepik.com/free-photo/mineral-wall-rock-hard-strong_1253-846.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
  ],
  "lime-stones": [
    {
      id: 20,
      name: "Thandoor stone",
      image:
        "https://img.freepik.com/free-photo/black-marbled-surface_53876-90798.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 21,
      name: "Gotan",
      image:
        "https://img.freepik.com/free-photo/black-marbled-surface_53876-90798.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 22,
      name: "Jaisalmer",
      image:
        "https://img.freepik.com/free-photo/black-marbled-surface_53876-90798.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
    {
      id: 23,
      name: "Jodhpur",
      image:
        "https://img.freepik.com/free-photo/black-marbled-surface_53876-90798.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
  ],
  tiles: [
    {
      id: 35,
      name: "Glossy Tile",
      image:
        "https://img.freepik.com/free-photo/black-marbled-surface_53876-90798.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid",
    },
  ],
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
        <span className="bg-stone-200 py-2 px-5 shadow rounded-xl">
          products in {categoryName}
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-32 py-10">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className=" p-3 rounded-lg shadow">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-2 rounded"
                />
                <h3 className="text-lg text-gray-600 font-semibold">
                  {product.name}
                </h3>
              </Link>
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
