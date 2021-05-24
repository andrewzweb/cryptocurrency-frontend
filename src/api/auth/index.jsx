import axios from "axios";
import { setHeader, TEST_API } from "../index";

export default {
    signin: (credentials) =>
    axios.post(`${TEST_API}/admin/login_check`, credentials).then((res) => {
      return res;
    }),

    logOut: () => {
        let config = {
          method: "POST",
          baseURL: `${TEST_API}/admin/devices/logout`,
          headers: setHeader(),
        };
        return axios(config).then((res) => res && res.data);
    },
}