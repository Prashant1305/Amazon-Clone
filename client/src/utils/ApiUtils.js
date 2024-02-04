import { baseUrl } from "../Constant";
import axios from "axios";

export const getAllBanner = () => {
  const url = `${baseUrl}/api/banner`;
  const response = axios.get(url, {
    "Content-Type": "application/json",
  });
  return response; // response is promise
};

export const signup = (data) => {
  const url = `${baseUrl}/api/auth/register`;
  const response = axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const signin = (data) => {
  // console.log(data);
  const url = `${baseUrl}/api/auth/login`;
  const response = axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getAllClientData = (token) => {
  const url = `${baseUrl}/api/auth/clientdata`;
  const response = axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};


