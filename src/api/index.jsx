import axios from "axios";

import currency from './currency'
import auth from './auth'

export const TEST_API = 'http://localhost:8000';

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
  auth
};
