import cookie from "../Cookie/cookie";
import jwt, { JwtPayload } from "jsonwebtoken";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/Token/token.constant";

class Token {
  public getToken(key: string): string | undefined {
    return cookie.getCookie(key);
  }

  public decodeToken(key: string) {
    return jwt.decode(this.getToken(key)!) as JwtPayload;
  }

  public setToken(key: string, token: string): void {
    cookie.setCookie(key, token);
  }

  public clearToken() {
    cookie.removeCookie(ACCESS_TOKEN_KEY);
    cookie.removeCookie(REFRESH_TOKEN_KEY);
  }
}
const token = new Token();
export default token;
