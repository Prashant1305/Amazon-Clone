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

export const topTendiscountedProducts = () => {
  const url = `${baseUrl}/api/product/toptendiscountedProducts`;
  const response = axios.get(url);
  return response;
};

export const topTwentyRatedProducts = () => {
  const url = `${baseUrl}/api/product/topTwentyRatedProducts`;
  const response = axios.get(url);
  return response;
};

export const singleProductDetails = ({ id }) => {
  const url = `${baseUrl}/api/product/getsingleproductdetails/${id}`;
  return axios.get(url);
};

export const postCartData = (data, token) => {
  const url = `${baseUrl}/api/auth/postcartdata`;
  const response = axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const getCartDataFromServer = (token) => {
  const url = `${baseUrl}/api/auth/getcartdata`;
  const response = axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
