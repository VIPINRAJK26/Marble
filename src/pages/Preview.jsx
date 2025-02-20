import { useParams } from "react-router-dom";

const productsData = {
  "indian-marbles": [
    { id: 1, name: "Makrana White", image: "/images/makrana.jpg" },
    { id: 2, name: "Rajnagar White", image: "/images/rajnagar.jpg" },
  ],
  "indian-granites": [
    { id: 3, name: "Black Galaxy", image: "/images/black-galaxy.jpg" },
    { id: 4, name: "Tan Brown", image: "/images/tan-brown.jpg" },
  ],
  "italian-marbles": [
    { id: 5, name: "Carrara White", image: "/images/carrara.jpg" },
    { id: 6, name: "Botticino", image: "/images/botticino.jpg" },
  ],
  "kotta-stone": [
    { id: 7, name: "Kotta Brown", image: "/images/kotta-brown.jpg" },
    { id: 8, name: "Kotta Green", image: "/images/kotta-green.jpg" },
  ],
  "jaisalmer-stone": [
    { id: 9, name: "Yellow Jaisalmer", image: "/images/yellow-jaisalmer.jpg" },
    { id: 10, name: "Red Jaisalmer", image: "/images/red-jaisalmer.jpg" },
  ],
  "lime-stones": [
    { id: 11, name: "Blue Limestone", image: "/images/blue-limestone.jpg" },
    { id: 12, name: "Tandoor Yellow", image: "/images/tandoor-yellow.jpg" },
  ],
  tiles: [
    { id: 13, name: "Glossy Tile", image: "/images/glossy-tile.jpg" },
    { id: 14, name: "Matte Tile", image: "/images/matte-tile.jpg" },
  ],
};

const Preview = () => {
  const { categoryName } = useParams();
  const products = productsData[categoryName] || [];

  return (
    <div className="container mx-auto p-6 pt-10 bg-gray-300">
      <h2 className="text-2xl font-bold mb-4 capitalize">
        {categoryName.replace("-", " ")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
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
