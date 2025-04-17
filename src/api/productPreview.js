import axiosInstance from "./axios";

export const getPreview = async () => {
    const response = await axiosInstance.get("preview/")
    return response.data
}