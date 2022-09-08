import useHandleHomeSchedule from "../../hooks/homeSchedule/useHandleHomeSchedule";
import useHomeSchedule from "../../hooks/homeSchedule/useHomeSchedule";
import HomeSchedule from "./homeSchedule/HomeSchedule";
import HomeScheduleSideBar from "./homeScheduleSideBar/HomeScheduleSideBar";
import { HomeContainer } from "./style";

const Home = () => {
  const { calendarRef, handleMonth, date } = useHandleHomeSchedule();
  const { handleSchedule } = useHomeSchedule();

  return (
    <HomeContainer>
      <HomeScheduleSideBar />
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
