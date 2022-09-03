import Calendar from "@toast-ui/react-calendar";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { useGetSchedules } from "../../../queries/schedule/schedule.query";
import HomeScheduleHeader from "./HomeScheduleHeader/HomeSchduleHeader";
import { HomeScheduleContainer } from "./style";

const HomeSchedule = () => {
  const initialEvents = [
    {
      id: "1",
      title: "Lunch",
      category: "time",
      start: "2022-09-28T12:00:00",
      end: "2022-09-28T13:30:00",
      target: "1학년",
    },
    {
      id: "2",
      title: "Coffee Break",
      category: "time",
      start: "2022-09-28T15:00:00",
      end: "2022-09-30T15:30:00",
      target: "1학년",
    },
    {
      id: "3",
      title: "Coffee Break",
      category: "time",
      start: "2022-09-28T15:00:00",
      end: "2022-09-30T15:30:00",
      target: "1학년",
    },
    {
      id: "4",
      title: "Coffee Break",
      category: "time",
      start: "2022-09-28T15:00:00",
      end: "2022-09-30T15:30:00",
      target: "1학년",
    },
  ];

  const { data } = useGetSchedules({ page: 1, limit: 100 });

  console.log(data);

  // const templateConfig: Template;

  return (
    <HomeScheduleContainer>
      <HomeScheduleHeader />
      <Calendar
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
