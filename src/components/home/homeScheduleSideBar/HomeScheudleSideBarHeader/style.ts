import styled from "styled-components";

export const HomeScheduleSideBarHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 12px;
  box-sizing: border-box;
  font-size: 15px;
  color: ${({ theme }) => theme.contrast};
  row-gap: 10px;
`;

export const HomeScheduleSideBarHeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const HomeScheduleSideBarHeaderClassificationText = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;
