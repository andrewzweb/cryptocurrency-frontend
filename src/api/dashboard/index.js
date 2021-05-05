import { setHeader, TEST_API } from "../index";
import axios from "axios";
const SIGNALING_SERVER = "http://localhost:8000/ws/chat/dashboard"

export default {
  getDashboardItems: (id, page) => {
    let config = {
      method: "GET",
      baseURL: '${SIGNALING_SERVER}/' ,
    };
    return axios(config).then((res) => res && res.data);
  }
}
