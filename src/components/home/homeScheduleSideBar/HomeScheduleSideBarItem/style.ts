import styled from "styled-components";
import { palette } from "../../../../style/palette";

export const HomeScheduleSideBarItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 10px;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

export const HomeScheduleSideBarItemTitleWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const HomeScheduleSideBarItemTitle = styled.h1`
  font-size: 15px;
  color: ${({ theme }) => theme.contrast};
`;

export const HomeScheduleSideBarItemContentWrap = styled.div`
  display: flex;
`;

export const HomeScheduleSideBarItemDate = styled.span`
  color: ${palette.gray[300]};
  font-size: 14px;
`;

export const HomeScheduleSideBarItemTargetWrap = styled.div<{
  backgroundColor: string;
}>`
  width: 46px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 2px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  padding-top: 2.5px;
`;

export const HomeScheduleSideBarItemTargetText = styled.p`
  font-size: 11px;
  color: white;
`;
