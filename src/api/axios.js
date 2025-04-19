// src/api/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://server.pkstones.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
