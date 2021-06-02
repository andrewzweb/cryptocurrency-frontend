import { setHeader, TEST_API } from "../index";
import axios from "axios";

export default {
  getAllCurrency: () => {
    let config = {
      method: "GET",
      baseURL: `${TEST_API}/api/currency/`
    };
    return axios(config).then((res) => res && res.data);
  },
  getCurrency: (id) => {
    let config = {
      method: "GET",
      baseURL: `${TEST_API}/api/currency/${id}`,
      headers: setHeader(),
    };
    return axios(config).then((res) => res && res.data);
  },
  createCurrency: (data) => {
    let config = {
      method: "POST",
      baseURL: `${TEST_API}/api/currency/`,
      headers: setHeader(),
      data,
    };
    return axios(config).then((res) => res && res.data);
  },
  updateCurrency: (id, data) => {
    let config = {
      method: "PUT",
      baseURL: `${TEST_API}/api/currency/${id}`,
      headers: setHeader(),
      data,
    };
    return axios(config).then((res) => res && res.data);
  },
  deleteCurrency: (id) => {
      let config = {
      method: "DELETE",
      baseURL: `${TEST_API}/api/currency/${id}`,
      headers: setHeader(),
    };
    return axios(config).then((res) => res && res.data);
  },
};
