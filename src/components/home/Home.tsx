import useHandleHomeSchedule from "../../hooks/schedule/useHandleHomeSchedule";
import HomeSchedule from "./HomeSchedule/HomeSchedule";
import HomeScheduleSideBar from "./HomeScheduleSideBar/HomeScheduleSideBar";
import { HomeContainer } from "./style";

const Home = () => {
  const { calendarRef, handleMonth } = useHandleHomeSchedule();
  return (
    <HomeContainer>
      <HomeScheduleSideBar />
      <HomeSchedule calendarRef={calendarRef} handleMonth={handleMonth} />
    </HomeContainer>
  );
};

export default Home;
