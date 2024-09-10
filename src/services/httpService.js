import axios from "axios";

// Set the base URL for the backend API (ensure this matches the FastAPI backend URL)
axios.defaults.baseURL = "http://127.0.0.1:8001";  // Ensure this is correct

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
