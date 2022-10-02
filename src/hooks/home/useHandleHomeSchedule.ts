import ToastUIReactCalendar from "@toast-ui/react-calendar/*";
import dayjs from "dayjs";
import { createRef, useCallback } from "react";
import { useRecoilState } from "recoil";
import { usePostModuleLog } from "../../queries/log/log.query";
import { scheduleDateAtom } from "../../store/schedule/schedule.store";
import dateTransform from "../../util/transform/dateTransform";

const useHandleHomeSchedule = () => {
  const calendarRef = createRef<ToastUIReactCalendar>();

  const [date, setDate] = useRecoilState(scheduleDateAtom);

  const postModuleLogMutation = usePostModuleLog();

  const nextMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.next();

    setDate((prev) => {
      const nextDay = dayjs(prev).add(1, "month").format("YYYY-MM-DD");

      postModuleLogMutation.mutate({
        moduleName: "일정/일정조회",
        description: `${nextDay} 조회`,
      });

      return nextDay;
    });
  }, [calendarRef, setDate, postModuleLogMutation]);

  const prevMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.prev();

    setDate((prev) => {
      const prevDay = dayjs(prev).subtract(1, "month").format("YYYY-MM-DD");

      postModuleLogMutation.mutate({
        moduleName: "일정/일정조회",
        description: `${prevDay} 조회`,
      });

      return prevDay;
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
