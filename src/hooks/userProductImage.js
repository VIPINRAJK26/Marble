import getProductImage from "../api/productImage";
import { useEffect, useState } from "react";

const useProductImage = () => {
    const [image,setImage] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        getProductImage()
        .then(setImage)
        .catch((err) =>{
            console.error(err);
            setError(err);
        })
        .finally(() => setLoading(false))
    },[])
    
    return {image,loading,error};
}

export default useProductImage