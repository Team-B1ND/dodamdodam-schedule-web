import HomeSchedule from "./homeSchedule/HomeSchedule";
import HomeScheduleSideBar from "./HomeScheduleSideBar/HomeScheduleSideBar";
import { HomeContainer } from "./style";

const Home = () => {
  return (
    <HomeContainer>
      <HomeScheduleSideBar />
      <HomeSchedule />
    </HomeContainer>
  );
};

export default Home;
