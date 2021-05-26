import axios from "axios";
import { setHeader, TEST_API } from "../index";

export default {
    login: (data) => {
      let config = {
        method: "POST",
        baseURL: `${TEST_API}/account/token-auth/`,
        headers: setHeader(),
        data
      };
      return axios(config).then((res) => res && res.data);
    },
    singin: () => {
      let config = {
        method: "GET",
        baseURL: `${TEST_API}/api/current_user/`,
        headers: setHeader(),
      };
      return axios(config).then((res) => res && res.data);
    },
    singup: (data) => {
      console.log('api', data)
      let config = {
        method: "POST",
        baseURL: `${TEST_API}/api/users/`,
        data
      };
      return axios(config).then((res) => res && res.data);
    },
}
