import { DodamShape, DodamTypography, hexToRgba } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 830px;
  height: 706px;

  display: flex;
  flex-direction: column;

  ${DodamShape.Large}
  background-color: ${({ theme }) => theme.backgroundNormal};

  padding: 24px;
  gap: 24px;
`;

export const CalendarHeader = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Heading1.Bold}
`;

export const DateWrap = styled.div`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;

  gap: 8px;
`;

export const IconWrap = styled.div`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.labelAssistive};
  ${DodamTypography.Label.Medium};
`;

export const CalendarFooter = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Category = styled.div`
  width: auto;
  height: auto;

  display: flex;

  padding: 8px 0;
  gap: 12px;
`;

export const Item = styled.div`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;

  gap: 6px;
`;

export const Color = styled.div<{ color: string }>`
  width: 6px;
  height: 6px;

  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.labelNeutral};
  ${DodamTypography.Caption1.Medium}
`;

export const CalendarWrap = styled.div`
  width: 100%;

  .container {
    border: 1px solid ${({ theme }) => theme.lineAlternative};
    border-radius: 4px;
    user-select: none;
  }

  .toastui-calendar-layout {
    background-color: ${({ theme }) => theme.backgroundNormal} !important;
  }

  .toastui-calendar-day-name-item > span {
    color: ${({ theme }) => theme.labelAlternative} !important;
  }

  .toastui-calendar-day-names {
    padding: 0;
  }

  .toastui-calendar-template-monthDayName {
    color: ${({ theme }) => theme.labelAlternative};

    display: flex;
    justify-content: center;
  }

  .toastui-calendar-grid-cell-header {
    display: flex;
    justify-content: flex-end;
    padding: 0 5px;
  }

  .toastui-calendar-weekday-grid {
    border-top: 1px solid ${({ theme }) => theme.lineAlternative} !important;
  }

  .toastui-calendar-daygrid-cell {
    border-left: 1px solid ${({ theme }) => theme.lineAlternative};
  }

  .toastui-calendar-daygrid-cell:first-child {
    border-left: none;
  }

  .toastui-calendar-weekday-grid-date {
    color: ${({ theme }) => hexToRgba(theme.labelNormal, 0.5)};
    ${DodamTypography.Label.Medium}
  }

  .toastui-calendar-weekday-grid-date-decorator {
    color: ${({ theme }) => theme.staticWhite};
    ${DodamTypography.Label.Medium}

    border-radius: 8px !important; /* DodamShape에 !important가 없어서 임시로 함 */
    background-color: ${({ theme }) => theme.primaryNormal} !important;
  }

  .toastui-calendar-weekday-event-title:only-child > span {
    strong {
      display: none;
    }

    span {
      color: ${({ theme }) => theme.staticWhite};
      ${DodamTypography.Caption1.Medium}
    }
  }

  .toastui-calendar-weekday-event-title:not(:only-child) > span {
    strong {
      display: none;
    }

    span {
      color: ${({ theme }) => theme.labelNeutral};
      ${DodamTypography.Caption1.Medium}
    }
  }
`;
