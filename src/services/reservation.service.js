import axios from "axios";
import authHeader from "../services/auth-service";

const API_URL = "http://localhost:8080/";

// const getFeedbacks = (id) => {
//   return axios.get(API_URL + `feedbacks/${id}`, {
//     headers: authHeader(),
//   });
// };

const create = (id, data) => {
  return axios.post(API_URL + `payments/${id}`, data, {
    headers: authHeader(),
  });
};

const paypal = async (data) => {
  return await axios.post(API_URL + 'payments/createpaypal', data, {
    headers: authHeader(),
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  create,
  paypal
};
