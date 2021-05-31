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
}
