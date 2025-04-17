import axiosInstance from "./axios";

export const getImages = async () => {
    const response = await axiosInstance.get("gal_image/");
    return response.data;
}