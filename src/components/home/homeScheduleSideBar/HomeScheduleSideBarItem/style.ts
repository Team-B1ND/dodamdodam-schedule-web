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

export const HomeScheduleSideBarItemTargetWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
`;

export const HomeScheduleSideBarItemTargetCircle = styled.span<{
  backgroundColor: string;
}>`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const HomeScheduleSideBarItemTargetText = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.contrast};
  line-height: 13px;
  vertical-align: middle;
`;
