import axios from "axios";
import { RefreshResponse } from "../../types/token/token.type";
import { postRefreshTokenParam } from "./token.param";
import config from "../../config/config.json";

class Token {
  public async postRefreshToken(
    token: postRefreshTokenParam
  ): Promise<RefreshResponse> {
    const { data } = await axios.post<RefreshResponse>(
      `${config.SERVER}/token/refresh`,
      token
    );
    return data;
  }
}
const token = new Token();
export default token;
