import ToastUIReactCalendar from "@toast-ui/react-calendar/*";
import dayjs from "dayjs";
import { createRef, useCallback } from "react";
import { useRecoilState } from "recoil";
import { usePostModuleLog } from "../../queries/log/log.query";
import { scheduleDateAtom } from "../../store/schedule/schedule.store";
import dateTransform from "../../util/transform/dateTransform";

const useCalendearMove = () => {
  const calendarRef = createRef<ToastUIReactCalendar>();
  const [date, setDate] = useRecoilState(scheduleDateAtom);

  const postModuleLogMutation = usePostModuleLog();

  const nextMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.next();

    setDate((prev) => {
      const nextMonth = dayjs(prev).add(1, "month").format("YYYY-MM-DD");

      postModuleLogMutation.mutate({
        moduleName: "일정/일정조회",
        description: `${nextMonth} 조회`,
      });

      return nextMonth;
    });
  }, [calendarRef, setDate, postModuleLogMutation]);

  const prevMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.prev();

    setDate((prev) => {
      const prevMonth = dayjs(prev).subtract(1, "month").format("YYYY-MM-DD"); //한 달전

      postModuleLogMutation.mutate({
        moduleName: "일정/일정조회",
        description: `${prevMonth} 조회`,
      });

      return prevMonth;
    });
  }, [calendarRef, setDate, postModuleLogMutation]);

  const todayMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.today();

    const today = `${dateTransform.hyphen().slice(0, 8)}01`;

    postModuleLogMutation.mutate({
      moduleName: "일정/일정조회",
      description: `${today} 조회`,
    });

    setDate(today);
  }, [calendarRef, setDate, postModuleLogMutation]);

  return {
    date,
    calendarRef,
    nextMonth,
    prevMonth,
    todayMonth,
  };
};

export default useCalendearMove;
