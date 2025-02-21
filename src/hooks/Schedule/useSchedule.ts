import dayjs from "dayjs";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { scheduleDateAtom } from "src/store/schedule/schedule.store";
import { useGetSchedulesByDate } from "src/queries/schedule/schedule.query";
import { eventSchedule, Schedule } from "src/types/schedule/schedule.type";
import dataTransform from "src/util/transform/dataTransform";
import ToastUIReactCalendar from "@toast-ui/react-calendar";

export const useSchedule = () => {
  const calendarRef = useRef<ToastUIReactCalendar>(null);
  const [date, setDate] = useRecoilState(scheduleDateAtom);
  const [schedule, setSchedule] = useState<eventSchedule[]>([]);

  const { data: scheduleData, isLoading } = useGetSchedulesByDate({
    startAt: date,
    endAt: `${date.slice(0, 8)}${dayjs(date).daysInMonth()}`,
  });

  const handleChangeDate = (type: string) => {
    const calendarInstance = calendarRef!.current!.getInstance();

    if (type === "increase") {
      calendarInstance?.next();
      setDate(dayjs(date).add(1, "month").format("YYYY-MM-DD"));
    } else {
      calendarInstance?.prev();
      setDate(dayjs(date).subtract(1, "month").format("YYYY-MM-DD"));
    }
  };

  const calendarScheduleLoad = useCallback(() => {
    console.log(scheduleData?.data);
    scheduleData?.data.map((schedule) => {
      setSchedule((prev) => {
        const newCalendarData = calendarScheduleTransform(schedule);

        return [...prev, newCalendarData];
      });
    });
  }, [scheduleData?.data]);

  const calendarScheduleTransform = (schedule: Schedule) => {
    const eventScheduleColor = dataTransform.scheduleTargetTransform(
      dataTransform.scheduleTargetDataTransform(schedule.targetGrades[0])
    );

    const newCalendarScheduleData = {
      id: schedule.id,
      title: schedule.name,
      target: schedule.targetGrades[0],
      attendees: [
        dataTransform.scheduleTargetDataTransform(schedule.targetGrades[0]),
      ],
      location: dataTransform.schedulePlaceTransform(schedule.place),
      category: "time",
      isReadOnly: true,
      borderColor: eventScheduleColor,
      backgroundColor: eventScheduleColor,
      start: schedule.date[0],
      end: schedule.date[1],
      state: null,
    };

    return newCalendarScheduleData;
  };

  useEffect(() => {
    setSchedule([]);

    if (scheduleData?.data && !isLoading) {
      calendarScheduleLoad();
    }
  }, [scheduleData?.data, isLoading, calendarScheduleLoad, date]);

  return {
    date,
    schedule,
    calendarRef,
    handleChangeDate,
  };
};
