import axiosInstance from "./axios";

const getProductImage = async () => {
    const response = await axiosInstance.get("product_image/");
    return response.data;
}

export default getProductImage