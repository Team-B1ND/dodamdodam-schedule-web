import { getRefreshTokenParam } from "./token.param";

class Token {
  public async getRefreshToken({ token }: getRefreshTokenParam) {}
}

export default new Token();
