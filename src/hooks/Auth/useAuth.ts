import token from "src/lib/Token/token";

export const useAuth = () => {
  const handleClickLogout = () => {
    token.clearToken();
    window.location.href = "http://dodam.b1nd.com/sign";
  };

  return {
    handleClickLogout,
  };
};
