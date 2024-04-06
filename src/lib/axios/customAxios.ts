import axios from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import token from "../token/token";
import { customAxiosInterceptor } from "./interceptor";

export const dodamV6Axios = axios.create({
  baseURL: config.TEST_SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)!}`,
  },
});

dodamV6Axios.interceptors.request.use(customAxiosInterceptor);
