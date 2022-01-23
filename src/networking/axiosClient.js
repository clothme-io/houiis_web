import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000",
});

// axiosClient.interceptors.request((req) => {});
// axiosClient.interceptors.response(
//   (response) => {},
//   (error) => {}
// );

export default axiosClient;
