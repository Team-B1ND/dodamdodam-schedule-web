import axios from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token/token.constant";
import token from "../Token/token";
import { customAxiosInterceptor } from "./interceptor";

export const dodamV6Axios = axios.create({
  baseURL: config.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)!}`,
  },
});

dodamV6Axios.interceptors.request.use(customAxiosInterceptor);
