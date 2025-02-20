import { DodamShape, DodamTypography } from "@b1nd/dds-web";
import styled from "styled-components";

export const Container = styled.div`
  width: 322px;
  height: min-content;

  display: flex;
  flex-direction: column;

  ${DodamShape.Large}
  background-color: ${({ theme }) => theme.backgroundNormal};

  padding: 16px;
  gap: 16px;
`;

export const List = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const DateWrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;

export const DayNum = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Heading2.Bold}
`;

export const DayStr = styled.p`
  color: ${({ theme }) => theme.labelAlternative};
  ${DodamTypography.Label.Medium}
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;
`;

export const Color = styled.div`
  width: 6px;
  height: 6px;

  border-radius: 50%;
  background-color: #ffd338;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.labelNeutral};
  ${DodamTypography.Body1.Medium}
`;
