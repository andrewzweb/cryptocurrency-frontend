import { setHeader, TEST_API } from "../index";
const SIGNALING_SERVER = "http://localhost:8000/ws/chat/dashboard"


const Socket = new WebSocket(
  'ws://'
    + '127.0.0.1:8000'
    + '/ws/chat/'
    + 'dashboard'
    + '/'
);

export const updateData = () => {
  Socket.send(JSON.stringify({
    'command': 'update_dashboard'
  }))
}

export default {
  getDashboardItems: (id, page) => {
    let config = {
      method: "GET",
      baseURL: '${SIGNALING_SERVER}/' ,
    };
    return axios(config).then((res) => res && res.data);
  }
}
