import { createRef, useCallback, useEffect, useState } from "react";
import { useGetSchedulesByDate } from "../../queries/schedule/schedule.query";
import dateTransform from "../../util/transform/dateTransform";
import dayjs from "dayjs";
import ToastUIReactCalendar from "@toast-ui/react-calendar/*";

const useHomeSchedule = () => {
  const calendarRef = createRef<ToastUIReactCalendar>();

  const [date, setDate] = useState(`${dateTransform.hyphen().slice(0, 8)}01`);

  const schedules = useGetSchedulesByDate({
    startDate: date,
    endDate: `${date.slice(0, 8)}${dayjs(date).daysInMonth()}`,
  }).data?.data;

  const nextMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.next();

    setDate((prev) => dayjs(prev).add(1, "month").format("YYYY-MM-DD"));
  }, [calendarRef]);

  const prevMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.prev();

    setDate((prev) => dayjs(prev).subtract(1, "month").format("YYYY-MM-DD"));
  }, [calendarRef]);

  const todayMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.today();
    setDate((prev) => `${dateTransform.hyphen().slice(0, 8)}01`);
  }, [calendarRef]);

  const handleMonth = useCallback(
    (scope: "next" | "prev" | "today") => {
      if (calendarRef && calendarRef.current) {
        if (scope === "next") nextMonth();
        else if (scope === "prev") prevMonth();
        else if (scope === "today") todayMonth();
      }
    },
    [calendarRef, nextMonth, prevMonth, todayMonth]
  );

  useEffect(() => {
    console.log(schedules);
  }, [schedules]);

  return {
    date,
    calendarRef,
    schedules,
    handleMonth,
  };
};

export default useHomeSchedule;
