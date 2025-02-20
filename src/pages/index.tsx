import * as S from "./style";
import Schedule from "src/components/home/ScheduleCalendar";
import ScheduleList from "src/components/home/ScheduleList";

const HomePage = () => {
  return (
    <S.SchedulePage>
      <S.SchduleWrap>
        <Schedule />
        <ScheduleList />
      </S.SchduleWrap>
    </S.SchedulePage>
  );
};

export default HomePage;
