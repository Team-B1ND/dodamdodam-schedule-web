import { AxiosRequestConfig } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Token/token.constant";
import tokenRepository from "../../repository/Token/token.repository";
import token from "../Token/token";
import { dodamV6Axios } from "./customAxios";

export const customAxiosInterceptor = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const refreshToken = token.getToken(REFRESH_TOKEN_KEY);
  const decodeToken = token.decodeToken(ACCESS_TOKEN_KEY);
  const currentTime = Date.now() / 1000;

  if (refreshToken && decodeToken?.exp! < currentTime) {
    try {
      const { data: newAccessToken } = await tokenRepository.postRefreshToken({
        token: refreshToken,
      });

      config.headers![REQUEST_TOKEN_KEY] = newAccessToken;
      dodamV6Axios.defaults.headers.common[REQUEST_TOKEN_KEY] = newAccessToken;
      token.setToken(ACCESS_TOKEN_KEY, newAccessToken);
    } catch (error) {
      window.alert("세션이 만료되었습니다");
      window.location.href = "http://dodam.b1nd.com/sign";
    }
  }

  return config;
};
