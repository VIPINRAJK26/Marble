import { useState,useEffect } from "react";
import { getHero } from "../api/hero";

const useHero = () => {
  const [hero, setHero] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHero()
      .then(setHero)
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);


  return { hero, loading,error };
};

export default useHero