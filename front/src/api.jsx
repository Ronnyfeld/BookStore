import axios from "axios";

export const API_BASE_URL = "https://bookstore-1-k8hx.onrender.com"; 

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
