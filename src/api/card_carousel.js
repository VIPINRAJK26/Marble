// src/api/card_carousel.js
import axiosInstance from "./axios"; // ✅ Use your custom instance

export const getCarousel = async () => {
  const response = await axiosInstance.get("card_carousel/");
  return response.data;
};
