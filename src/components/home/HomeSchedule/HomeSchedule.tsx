import Calendar from "@toast-ui/react-calendar";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { HomeScheduleContainer } from "./style";
import React from "react";
import HomeScheduleHeader from "./HomeScheduleHeader/HomeSchduleHeader";
import { useRecoilValue } from "recoil";
import { scheduleDateAtom } from "../../../store/schedule/schedule.store";
import useCalendarSchedules from "../../../hooks/schedule/useCalendarSchedules";
import useCalendearMove from "../../../hooks/schedule/useCalendearMove";

const HomeSchedule = () => {
  const date = useRecoilValue(scheduleDateAtom);
  const { handleSchedule } = useCalendarSchedules();
  const { calendarRef, todayMonth, prevMonth, nextMonth } = useCalendearMove();

  return (
    <HomeScheduleContainer>
      <HomeScheduleHeader
        todayMonth={todayMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        date={date}
      />
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
      />
    </HomeScheduleContainer>
  );
};

export default React.memo(HomeSchedule);
