import styled from "styled-components";

export const HomeScheduleSideBarHeaderContainer = styled.div`
  width: 100%;
  min-height: 60px;
  max-height: 60px;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  box-sizing: border-box;
  font-size: 15px;
  justify-content: space-between;
  color: ${({ theme }) => theme.contrast};
`;

export const HomeScheduleSideBarHeaderTimeWrap = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.backgroundColor4};
  border: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
