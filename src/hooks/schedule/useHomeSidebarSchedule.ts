import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { usePostModuleLog } from "../../queries/log/log.query";
import { useGetMember } from "../../queries/member/member.query";
import { useGetSchedulesByDate } from "../../queries/schedule/schedule.query";
import {
  scheduleClassificationKeyword,
  scheduleDateAtom,
} from "../../store/schedule/schedule.store";
import { Schedule } from "../../types/schedule/schedule.type";

const useHomeSidebarSchedule = () => {
  const date = useRecoilValue(scheduleDateAtom);
  const classificationKeyword = useRecoilValue(scheduleClassificationKeyword);
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const { data: memberData } = useGetMember();
  const { data: schedulesData } = useGetSchedulesByDate(
    {
      startDate: date,
      endDate: `${date.slice(0, 8)}${dayjs(date).daysInMonth()}`,
    },
    { suspense: true }
  );

  const postModuleLogMutation = usePostModuleLog();

  const loadMyGradeSchedules = () => {
    setSchedules(
      schedulesData?.data.filter(
        (schedule) =>
          schedule.target.indexOf(String(memberData?.data.classroom.grade)) >
            -1 || schedule.target === "전교생"
      )!
    );
    postModuleLogMutation.mutate({
      moduleName: "일정/내일정 조회",
      description: "내일정 조회",
    });
  };

  const loadAllSchedules = () => {
    setSchedules(schedulesData!.data);
    postModuleLogMutation.mutate({
      moduleName: "일정/전체일정 조회",
      description: "전체일정 조회",
    });
  };

  const handleSchedules = (scope: string) => {
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
  };

  useEffect(() => {
    if (schedulesData?.data) {
      handleSchedules(classificationKeyword);
    }
  }, [schedulesData?.data, classificationKeyword]);

  return {
    schedules,
  };
};

export default useHomeSidebarSchedule;
