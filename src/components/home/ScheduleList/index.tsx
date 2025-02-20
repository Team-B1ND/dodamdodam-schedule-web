import * as S from "./style";

const ScheduleList = () => {
  return (
    <S.Container>
      <S.List>
        <S.DateWrap>
          <S.DayNum>11일</S.DayNum>
          <S.DayStr>월요일</S.DayStr>
        </S.DateWrap>
        <S.ContentWrap>
          <S.Content>
            <S.Color />
            <S.Text>타운홀미팅</S.Text>
          </S.Content>
        </S.ContentWrap>
      </S.List>
    </S.Container>
  );
};

export default ScheduleList;
