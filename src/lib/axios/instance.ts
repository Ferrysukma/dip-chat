import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Casche-Control": "no-cache",
  clientSid: "90213869D17D45F9BEA2129BD24A2A7F",
  ai: "dipdemo",
  Expires: 0,
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_AI_URL,
  headers,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  async (request) => {
    return request;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;
