import ToastUIReactCalendar from "@toast-ui/react-calendar/*";
import dayjs from "dayjs";
import { createRef, useCallback } from "react";
import { useRecoilState } from "recoil";
import { scheduleDateAtom } from "../../store/schedule/schedule.store";
import dateTransform from "../../util/transform/dateTransform";

const useCalendearMove = () => {
  const calendarRef = createRef<ToastUIReactCalendar>();
  const [date, setDate] = useRecoilState(scheduleDateAtom);

  const nextMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.next();

    setDate((prev) => {
      const nextMonth = dayjs(prev).add(1, "month").format("YYYY-MM-DD");

      return nextMonth;
    });
  }, [calendarRef, setDate]);

  const prevMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.prev();

    setDate((prev) => {
      const prevMonth = dayjs(prev).subtract(1, "month").format("YYYY-MM-DD"); //한 달전

      return prevMonth;
    });
  }, [calendarRef, setDate]);

  const todayMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.today();

    const today = `${dateTransform.hyphen().slice(0, 8)}01`;

    setDate(today);
  }, [calendarRef, setDate]);

  return {
    date,
    calendarRef,
    nextMonth,
    prevMonth,
    todayMonth,
  };
};

export default useCalendearMove;
