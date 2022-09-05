import Calendar from "@toast-ui/react-calendar";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import HomeScheduleHeader from "./HomeScheduleHeader/HomeSchduleHeader";
import { HomeScheduleContainer } from "./style";
import useHomeSchedule from "../../../hooks/homeSchedule/useHomeSchedule";

const HomeSchedule = () => {
  const initialEvents = [
    {
      id: "1",
      title: "Lunch",
      calendarId: 2,
      category: "time",
      start: "2022-09-10T12:00:00",
      end: "2022-09-12T13:30:00",
      target: "1학년",
      isReadOnly: true,
      backgroundColor: "#f97e6d",
      borderColor: "#f97e6d",
    },
    {
      id: "2",
      title: "Coffee Break",
      category: "time",
      start: "2022-09-10T15:00:00",
      end: "2022-09-10T15:30:00",
      target: "1학년",
    },
    {
      id: "3",
      title: "Coffee Break",
      category: "time",
      start: "2022-09-21T15:00:00",
      end: "2022-09-23T15:30:00",
      target: "1학년",
    },
    {
      id: "4",
      title: "Coffee Break",
      category: "time",
      start: "2022-09-22T15:00:00",
      end: "2022-09-30T15:30:00",
      target: "1학년",
    },
  ];

  const { calendarRef, date, handleMonth } = useHomeSchedule();

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
        events={initialEvents}
        // template
      />
    </HomeScheduleContainer>
  );
};

export default HomeSchedule;
