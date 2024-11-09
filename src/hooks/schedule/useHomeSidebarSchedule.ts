import dayjs from "dayjs";
import { useEffect, useState, useCallback } from "react";
import { useRecoilValue } from "recoil";
import { useGetMember } from "../../queries/member/member.query";
import { useGetSchedulesByDate } from "../../queries/schedule/schedule.query";
import { scheduleClassificationKeyword, scheduleDateAtom } from "../../store/schedule/schedule.store";
import { Schedule } from "../../types/schedule/schedule.type";

const useHomeSidebarSchedule = () => {
  const date = useRecoilValue(scheduleDateAtom);
  const classificationKeyword = useRecoilValue(scheduleClassificationKeyword);
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const { data: memberData } = useGetMember();
  const { data: schedulesData } = useGetSchedulesByDate(
    {
      startAt: date,
      endAt: `${date.slice(0, 8)}${dayjs(date).daysInMonth()}`,
    },
    { suspense: true },
  );


  const loadMyGradeSchedules = useCallback(() => {
    setSchedules(
      schedulesData?.data.filter(
        (schedule) =>
          schedule.targetGrades[0].indexOf(String(memberData?.data.student.grade)) > -1 ||
          schedule.targetGrades[0] === "전교생",
      )!,
    );
  }, [schedulesData, memberData]);

  const loadAllSchedules = useCallback(() => {
    setSchedules(schedulesData!.data);
  }, [schedulesData]);

  const handleSchedules = useCallback(
    (scope: string) => {
      setSchedules([]);

      switch (scope) {
        case "전체 일정":
          loadAllSchedules();
          break;

        case "내 일정":
          loadMyGradeSchedules();
          break;
        default:
          loadAllSchedules();
          break;
      }
    },
    [loadAllSchedules, loadMyGradeSchedules]
  );

  useEffect(() => {
    if (schedulesData?.data) {
      handleSchedules(classificationKeyword);
    }
  }, [schedulesData?.data, classificationKeyword, handleSchedules]);

  return {
    schedules,
  };
};

export default useHomeSidebarSchedule;
