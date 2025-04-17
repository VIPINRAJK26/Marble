import { useState,useEffect } from "react";
import { getCarousel } from "../api/card_carousel";

const useCarousel = () => {
    const [carousel,setCarousel] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getCarousel()
        .then(setCarousel)
        .catch(console.error)
        .finally(() => setLoading(false));
    },[]);

    return {carousel,loading};
}

export default useCarousel