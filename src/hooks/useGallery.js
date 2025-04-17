import { getGallery } from "../api/productGallery";
import { useEffect,useState } from "react";

const useGallery = () => {
    const [gallery,setGallery] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        getGallery()
        .then(setGallery)
        .catch((err)=>{
            console.error(err);
            setError(err);
        })
        .finally(() => setLoading(false));
    },[]);

    return {gallery,loading,error};
}

export default useGallery;