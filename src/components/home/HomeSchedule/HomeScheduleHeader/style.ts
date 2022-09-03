import styled from "styled-components";

export const HomeScheduleHeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  align-items: center;
  padding: 0px 12px;
`;

export const HomeScheduleHeaderTodayButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${({ theme }) => theme.backgroundPointColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.contrast};
  margin-right: 15px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

export const HomeScheduleHeaderArrowButtonWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const HomeScheduleHeaderArrowButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.backgroundPointColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  cursor: pointer;
  color: ${({ theme }) => theme.contrast};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
