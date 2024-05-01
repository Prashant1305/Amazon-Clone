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
export const getProductsByCategory = (category) => {
  const url = `${baseUrl}/api/product/getProductsByCategory/${category}`;
  const response = axios.get(url, {
    headers: {
      "Content-Type": "application/json",
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

export const getSearchResult = async (data) => {
  const url = `${baseUrl}/api/product/search`;
  const response = axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const allproduct = (data) => {
  const url = `${baseUrl}/api/admin/product/all`;
  const response = axios.get(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const addproduct = (data, token) => {
  const url = `${baseUrl}/api/admin/product/addproduct`;
  const response = axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
  return response;
};

export const deleteproduct = (id, token) => {
  const url = `${baseUrl}/api/admin/product/delete/${id}`;
  const response = axios.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const placeOrder = (token, data) => {
  const url = `${baseUrl}/api/order/addorder`;
  const response = axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });
  return response;
}

// api call  to get all addresses
export const allAddresses = (token) => {
  const url = `${baseUrl}/api/auth/getAddress`;
  const response = axios.get(url, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return response;
}

export const updateAddress = (token, data) => {
  const url = `${baseUrl}/api/auth/updateaddress`;
  const response = axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  return response;
}

export const addAddress = async (token, data) => {
  const url = `${baseUrl}/api/auth/addaddress`;
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  return response;
}

export const removeAddress_api = async (token, data) => {
  console.log(token, data);
  const url = `${baseUrl}/api/auth/removeaddress`;
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });
  return response;
}

export const addImageApi = (token, formData) => {
  const url = `${baseUrl}/api/admin/product/uploadImages`;
  const response = axios.post(url, formData, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response;
}

export const deleteImageApi = (token, data) => {
  const url = `${baseUrl}/api/admin/product/deleteImage`;
  const response = axios.post(url, data, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response;
}