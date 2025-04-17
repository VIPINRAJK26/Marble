import axiosInstance from "./axios";

export const getHero = async () => {
    const response = await axiosInstance.get('hero/')
    return response.data;
}