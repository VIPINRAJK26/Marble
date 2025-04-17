import { getPreview } from "../api/productPreview";
import { useState,useEffect } from "react";

const usePreview = () => {
    const [preview,setPreview] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        getPreview()
        .then(setPreview)
        .catch((err)=>{
            console.error(err);
            setError(err);
        })
        .finally(() => setLoading(false))
    },[]);

    return {preview,loading,error};
}

export default usePreview