import useHandleHomeSchedule from "../../hooks/home/useHandleHomeSchedule";
import useHomeSchedule from "../../hooks/home/useHomeSchedule";
import HomeSchedule from "./HomeSchedule/HomeSchedule";
import HomeScheduleSideBar from "./HomeScheduleSideBar/HomeScheduleSideBar";
import { HomeContainer } from "./style";

const Home = () => {
  const { calendarRef, handleMonth, date } = useHandleHomeSchedule();
  const { schedules, handleSchedule } = useHomeSchedule();

  return (
    <HomeContainer>
      <HomeScheduleSideBar date={date} schedules={schedules} />
      <HomeSchedule
        calendarRef={calendarRef}
        handleMonth={handleMonth}
        date={date}
        handleSchedule={handleSchedule}
      />
    </HomeContainer>
  );
};

export default Home;
