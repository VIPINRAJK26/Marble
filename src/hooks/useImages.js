import { getImages } from "../api/galleryImages";
import { useEffect,useState } from "react";

const useImages = () => {
    const [image,setImage] =useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        getImages()
        .then(setImage)
        .catch((err) =>{
            console.error(err);
            setError(err);
        })
        .finally(() => setLoading(false))
    },[])
    
    return {image,loading,error};
}

export default useImages;