import axios from "axios";

import { localStorageKeys } from "../constants/localStorageKeys";

const ENVIROMENT = process.env.REACT_APP_ENVIROMENT;

const baseURL =
  ENVIROMENT === "dev"
    ? `${process.env.REACT_APP_DEV}`
    : `${process.env.REACT_APP_PROD}`;

const api = axios.create({
  baseURL,
  // headers: {
  //   "Access-Control-Allow-Origin": "http://localhost:8000",
  //   "Access-Control-Allow-Credentials": "true",
  // },
});

// api.interceptors.request.use((config) => {
//   return {
//     ...config,
//     headers: {
//       "Access-Control-Allow-Origin": "http://localhost:3000",
//       // "Access-Control-Allow-Credentials": "true",
//     },
//   };
// });

export { api };
