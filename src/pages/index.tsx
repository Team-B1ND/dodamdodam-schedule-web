import * as S from "./style";
import Schedule from "@src/components/home/ScheduleCalendar";

const HomePage = () => {
  return (
    <S.SchedulePage>
      <S.SchduleWrap>
        <Schedule />
      </S.SchduleWrap>
    </S.SchedulePage>
  );
};

export default HomePage;
