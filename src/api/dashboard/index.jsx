import axios from "axios";
import { setHeader, TEST_API } from "../index";


export default {
  getItemsData: (data) => {
    let config = {
      method: "GET",
      baseURL: `${TEST_API}/api/dashboard/${data}`,
      headers: setHeader(),
    };
    return axios(config).then((res) => res && res.data);
  },
   addCurrencyToDashboard: (id, data) => {
    let config = {
      method: "PUT",
      baseURL: `${TEST_API}/api/dashboard/${id}`,
      headers: setHeader(),
      data,
    };
    return axios(config).then((res) => res && res.data);
  },

  delCurrencyFromDashboard: (id, data) => {
    let config = {
      method: "PUT",
      baseURL: `${TEST_API}/api/dashboard/${id}`,
      headers: setHeader(),
      data
    };
    return axios(config).then((res) => res && res.data);
  },
}
