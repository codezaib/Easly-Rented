import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://localhost:3000/api/v1", // adjust as needed
  withCredentials: true, // if you're using cookies/auth
  headers: {
    "Content-Type": "application/json",
  },
});

export default customFetch;
