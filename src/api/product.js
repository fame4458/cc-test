import axios from "axios";

export const apiFetchProductList = () => {
  return axios.get(`${process.env.REACT_APP_BACKEND}/product`);
};

export const apiFetchProductDetail = (id) => {
  return axios.get(`${process.env.REACT_APP_BACKEND}/product/${id}`);
};
