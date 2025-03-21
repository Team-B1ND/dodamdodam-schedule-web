import styled from "styled-components";

export const SchedulePage = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  padding: 58px 32px 59px 0;

  @media (max-width: 1068px), (max-height: 794px) {
    padding: 28px 32px 59px;
  }
`;

export const SchduleWrap = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;

  gap: 32px;

  @media (max-width: 1280px), (max-height: 794px) {
    height: 100%;
    flex-direction: column;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
