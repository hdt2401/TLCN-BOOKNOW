import axios from "axios";
import authHeader from "../services/auth-service";

const API_URL = "http://localhost:8080/";

const getLines = () => {
  return axios.get(API_URL + "schedules");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLines,
};
