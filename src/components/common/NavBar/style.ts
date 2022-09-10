import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100px;
  height: 100vh;
  background-color: ${({ theme }) => theme.navBarColor};
  padding: 22px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavBarLogo = styled.img`
  width: 30px;
  object-fit: scale-down;
`;
