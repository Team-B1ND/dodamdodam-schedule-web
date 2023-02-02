import styled from "styled-components";
import { skeletonAnimtaion } from "@b1nd/b1nd-styled-components-util";

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  height: 100%;

  row-gap: 30px;
`;

export const SkeletonItem = styled.div`
  width: 100%;
  height: 60px;
  ${skeletonAnimtaion}
`;
