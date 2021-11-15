import axios from "axios";
import authHeader from "../services/auth-service";

const API_URL = "http://localhost:8080/";

const getCarList = () => {
  return axios.get(API_URL + "cars", {
    headers: authHeader(),
  });
};

const getCar = (id) => {
  return axios.get(API_URL + `cars/${id}`, {
    headers: authHeader(),
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCarList,
  getCar,
};
