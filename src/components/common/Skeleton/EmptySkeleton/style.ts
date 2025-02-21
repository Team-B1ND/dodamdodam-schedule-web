import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const EmptySkeleton = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px 0;
  gap: 10px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Headline.Bold};
`;
