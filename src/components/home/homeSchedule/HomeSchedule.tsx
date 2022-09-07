import Calendar from "@toast-ui/react-calendar";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import useHomeSchedule from "../../../hooks/homeSchedule/useHomeSchedule";
import HomeScheduleHeader from "./HomeScheduleHeader/HomeSchduleHeader";
import { HomeScheduleContainer } from "./style";

const HomeSchedule = () => {
  const { handleSchedule, calendarRef, date, handleMonth } = useHomeSchedule();

  return (
    <HomeScheduleContainer>
      <HomeScheduleHeader date={date} handleMonth={handleMonth} />
      <Calendar
        ref={calendarRef}
        useDetailPopup
        view="month"
        month={{
          dayNames: [
            "일요일",
            "월요일",
            "화요일",
            "수요일",
            "목요일",
            "금요일",
            "토요일",
          ],
          visibleEventCount: 2,
        }}
        isReadOnly
        events={handleSchedule}
        // template
      />
    </HomeScheduleContainer>
  );
};

export default HomeSchedule;
