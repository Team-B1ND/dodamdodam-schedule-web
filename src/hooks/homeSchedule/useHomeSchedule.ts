import { useEffect, useState } from "react";
import { useGetSchedulesByDate } from "../../queries/schedule/schedule.query";
import dayjs from "dayjs";
import dataTransform from "../../util/transform/dataTransform";
import { useRecoilValue } from "recoil";
import { scheduleDateAtom } from "../../store/schedule/schedule.store";
import { Schedule } from "../../types/schedule/schedule.type";

const useHomeSchedule = () => {
  const date = useRecoilValue(scheduleDateAtom);
  const [handleSchedule, setHandleSchedule] = useState<any[]>([]);
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const { data, isLoading } = useGetSchedulesByDate({
    startDate: date,
    endDate: `${date.slice(0, 8)}${dayjs(date).daysInMonth()}`,
  });

  useEffect(() => {
    setHandleSchedule([]);
    setSchedules([]);

    if (data?.data && !isLoading) {
      data.data.forEach((schedule) =>
        setHandleSchedule((prev) => {
          const scheduleColor = dataTransform.scheduleTargetTransform(
            schedule.target
          );

          const newHandleSchedule = {
            id: schedule.id,
            title: schedule.name,
            target: schedule.target,
            attendees: [schedule.target],
            location: schedule.place || "장소 없음",
            category: "time",
            isReadOnly: true,
            borderColor: scheduleColor,
            backgroundColor: scheduleColor,
            start: schedule.startDate,
            end: schedule.endDate,
          };

          return [...prev, newHandleSchedule];
        })
      );
      setSchedules(data.data);
    }
  }, [data, isLoading]);

  return {
    schedules,
    handleSchedule,
  };
};

export default useHomeSchedule;
