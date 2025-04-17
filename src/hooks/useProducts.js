import { useState, useEffect } from "react";
import { getProducts } from "../api/products";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      getProducts()
        .then(setProducts)
        .catch((err) => {
          console.error(err);
          setError(err);
        })
        .finally(() => setLoading(false));
    }, []);

  return { products, loading , error};
};

export default useProducts;
