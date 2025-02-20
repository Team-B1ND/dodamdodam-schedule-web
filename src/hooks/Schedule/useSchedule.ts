import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { scheduleDateAtom } from "src/store/schedule/schedule.store";
import { useGetSchedulesByDate } from "src/queries/schedule/schedule.query";
import { eventSchedule, Schedule } from "src/types/schedule/schedule.type";
import dataTransform from "src/util/transform/dataTransform";

export const useSchedule = () => {
  const date = useRecoilValue(scheduleDateAtom);
  const [schedule, setSchedule] = useState<eventSchedule[]>([]);

  const { data: scheduleData, isLoading } = useGetSchedulesByDate({
    startAt: date,
    endAt: `${date.slice(0, 8)}${dayjs(date).daysInMonth()}`,
  });

  const calendarScheduleLoad = () => {
    scheduleData?.data.map((schedule) => {
      setSchedule((prev) => {
        const newCalendarData = calendarScheduleTransform(schedule);

        return [...prev, newCalendarData];
      });
    });
  };

  const calendarScheduleTransform = (schedule: Schedule) => {
    const eventScheduleColor = dataTransform.scheduleTargetTransform(
      dataTransform.scheduleTargetDataTransform(schedule.targetGrades[0])
    );

    const newCalendarScheduleData = {
      id: schedule.id,
      title: schedule.name,
      target: schedule.targetGrades[0],
      attendees: [dataTransform.scheduleTargetDataTransform(schedule.targetGrades[0])],
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
    if (scheduleData?.data && !isLoading) {
      calendarScheduleLoad();
    }
  }, [scheduleData?.data, isLoading]);

  return {
    schedule,
  };
};
