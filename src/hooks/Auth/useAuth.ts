import token from "src/lib/token/token";

export const useAuth = () => {
  const handleClickLogout = () => {
    token.clearToken();
    window.location.href = "http://dodam.b1nd.com/sign";
  };

  return {
    handleClickLogout,
  };
};
