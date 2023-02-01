import Calendar from "@toast-ui/react-calendar";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { HomeScheduleContainer } from "./style";
import ToastUIReactCalendar from "@toast-ui/react-calendar";
import React, { RefObject } from "react";
import HomeScheduleHeader from "./HomeScheduleHeader/HomeSchduleHeader";
import { useRecoilValue } from "recoil";
import { scheduleDateAtom } from "../../../store/schedule/schedule.store";
import useCalendarSchedules from "../../../hooks/schedule/\buseCalendarSchedules";

interface Props {
  calendarRef: RefObject<ToastUIReactCalendar>;
  handleMonth: (scope: "next" | "prev" | "today") => void;
}

const HomeSchedule = ({ calendarRef, handleMonth }: Props) => {
  const date = useRecoilValue(scheduleDateAtom);
  const { handleSchedule } = useCalendarSchedules();
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
      />
    </HomeScheduleContainer>
  );
};

export default React.memo(HomeSchedule);
