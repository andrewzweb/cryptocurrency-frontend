import axios from "axios";
import { store } from "../";
import currency from './currency'
export const TEST_API = `http://localhost:8000/api`;

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
  currency
};
