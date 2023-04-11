import axios from "axios";

// Lấy accessToken từ Local Storage
const accessToken = localStorage.getItem("accessToken");

// Tạo axios instance với Authorization header chứa accessToken
const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

export default instance;
