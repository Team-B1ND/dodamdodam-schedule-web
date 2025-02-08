import styled from "styled-components";

export const HomeScheduleSideBarContainer = styled.div`
  min-width: 250px;
  max-width: 250px;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor3};
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-right: 0px;
  box-sizing: border-box;
`;

export const HomeScheduleSideBarItemWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 12px;
  padding-bottom: 10px;
  box-sizing: border-box;
  row-gap: 14px;
  overflow-x: scroll;
`;
