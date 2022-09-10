import ToastUIReactCalendar from "@toast-ui/react-calendar/*";
import dayjs from "dayjs";
import { createRef, useCallback } from "react";
import { useRecoilState } from "recoil";
import { scheduleDateAtom } from "../../store/schedule/schedule.store";
import dateTransform from "../../util/transform/dateTransform";

const useHandleHomeSchedule = () => {
  const calendarRef = createRef<ToastUIReactCalendar>();

  const [date, setDate] = useRecoilState(scheduleDateAtom);

  const nextMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.next();

    setDate((prev) => dayjs(prev).add(1, "month").format("YYYY-MM-DD"));
  }, [calendarRef, setDate]);

  const prevMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.prev();

    setDate((prev) => dayjs(prev).subtract(1, "month").format("YYYY-MM-DD"));
  }, [calendarRef, setDate]);

  const todayMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.today();
    setDate((prev) => `${dateTransform.hyphen().slice(0, 8)}01`);
  }, [calendarRef, setDate]);

  const handleMonth = useCallback(
    (scope: "next" | "prev" | "today") => {
      if (calendarRef.current) {
        if (scope === "next") nextMonth();
        else if (scope === "prev") prevMonth();
        else if (scope === "today") todayMonth();
      }
    },
    [calendarRef, nextMonth, prevMonth, todayMonth]
  );

  return {
    date,
    calendarRef,
    handleMonth,
  };
};

export default useHandleHomeSchedule;
