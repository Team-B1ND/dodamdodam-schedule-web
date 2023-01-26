import { Suspense } from "react";
import useHandleHomeSchedule from "../../hooks/home/useHandleHomeSchedule";
import useHomeSchedule from "../../hooks/home/useHomeSchedule";
import ErrorBoundary from "../common/\bErorrBoundary";
import HomeSchedule from "./HomeSchedule/HomeSchedule";
import HomeScheduleSideBar from "./HomeScheduleSideBar/HomeScheduleSideBar";
import { HomeContainer } from "./style";

const Home = () => {
  const { calendarRef, handleMonth, date } = useHandleHomeSchedule();
  const { schedules, handleSchedule } = useHomeSchedule();

  return (
    <HomeContainer>
      <ErrorBoundary fallback={<div>Error...</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <HomeScheduleSideBar date={date} schedules={schedules} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Error...</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <HomeSchedule
            calendarRef={calendarRef}
            handleMonth={handleMonth}
            date={date}
            handleSchedule={handleSchedule}
          />
        </Suspense>
      </ErrorBoundary>
    </HomeContainer>
  );
};

export default Home;
