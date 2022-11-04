import { NavBarContainer, NavBarLogo } from "./style";
import DodamTextLogo from "../../../assets/logo/dodamTextLogo.svg";

const NavBar = () => {
  const homeRedirect = () => {
    window.location.href = "http://dodam.b1nd.com/";
  };

  return (
    <NavBarContainer>
      <NavBarLogo src={DodamTextLogo} onClick={homeRedirect} />
    </NavBarContainer>
  );
};

export default NavBar;
