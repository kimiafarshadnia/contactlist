import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const http = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};

export default http;
