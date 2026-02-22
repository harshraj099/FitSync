import axios from 'axios'
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "https://fitness-tracking-app-backend-i588.onrender.com/";
export const axiosInstance = axios.create({
    // baseURL: "https://fitness-tracking-app-backend-i588.onrender.com/api" ,
      baseURL: BASE_URL,
    withCredentials: true,
})