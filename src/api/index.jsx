import axios from "axios";

import currency from './currency'
import auth from './auth'
import dashboard from './dashboard'

export const TEST_API = 'http://localhost:8000';
export const socketCurrencyPath = 'ws://127.0.0.1:8001/ws/currency/';

export const setHeader = () => {
  const token = localStorage.getItem("token");
  let header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `JWT ${token}`,
  };
  return header;
};

export default {
  currency,
  auth,
  dashboard
};
