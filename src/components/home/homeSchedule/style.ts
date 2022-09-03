import styled from "styled-components";
import { palette } from "../../../style/palette";

export const HomeScheduleContainer = styled.div`
  width: 100%;
  height: 780px;
  margin-left: auto;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  margin-top: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;

  .container {
    height: 720px !important;
  }

  .toastui-calendar-layout {
    background-color: ${({ theme }) => theme.backgroundColor} !important;
  }

  .toastui-calendar-template-monthDayName {
    color: ${({ theme }) => theme.contrast} !important;
  }

  .toastui-calendar-holiday-sun .toastui-calendar-template-monthDayName {
    color: rgb(255, 64, 64) !important;
  }

  .toastui-calendar-layout .toastui-calendar-month {
    background-color: ${({ theme }) => theme.backgroundColor2} !important;
  }

  /* .toastui-calendar-month-daygrid {
    background-color: ${({ theme }) => theme.backgroundColor2} !important;
  } */

  .toastui-calendar-weekday-grid {
    border-top: 1px solid ${({ theme }) => theme.borderColor} !important;
  }

  .toastui-calendar-daygrid-cell + .toastui-calendar-daygrid-cell {
    border-left: 1px solid ${({ theme }) => theme.borderColor} !important;
  }

  .toastui-calendar-grid-cell-date {
    color: ${({ theme }) => theme.contrast} !important;
  }

  .toastui-calendar-grid-cell-date
    .toastui-calendar-weekday-grid-date.toastui-calendar-weekday-grid-date-decorator {
    background-color: ${palette.main} !important;
    color: white;
  }
`;
