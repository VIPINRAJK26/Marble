import axiosInstance from "./axios";

export const getGallery = async () => {
    const response = await axiosInstance.get("gallery/");
    return response.data;
}