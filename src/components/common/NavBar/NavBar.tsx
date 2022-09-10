import { NavBarContainer, NavBarLogo } from "./style";
import DodamTextLogo from "../../../assets/logo/dodamTextLogo.svg";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarLogo src={DodamTextLogo} />
    </NavBarContainer>
  );
};

export default NavBar;
