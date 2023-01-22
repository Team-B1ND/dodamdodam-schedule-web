import { useCallback, useEffect, useState } from "react";
import { useGetSchedulesByDate } from "../../queries/schedule/schedule.query";
import dayjs from "dayjs";
import dataTransform from "../../util/transform/dataTransform";
import { useRecoilValue } from "recoil";
import {
  scheduleClassificationKeyword,
  scheduleDateAtom,
} from "../../store/schedule/schedule.store";
import { Schedule } from "../../types/schedule/schedule.type";
import { useGetMember } from "../../queries/member/member.query";
import token from "../../lib/token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import { usePostModuleLog } from "../../queries/log/log.query";

const useHomeSchedule = () => {
  const date = useRecoilValue(scheduleDateAtom);
  const [handleSchedule, setHandleSchedule] = useState<any[]>([]);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const classificationKeyword = useRecoilValue(scheduleClassificationKeyword);

  const { data: memberData } = useGetMember();

  const { data: schedulesData, isLoading } = useGetSchedulesByDate({
    startDate: date,
    endDate: `${date.slice(0, 8)}${dayjs(date).daysInMonth()}`,
  });

  useEffect(() => {
    console.log(handleSchedule);
  }, [handleSchedule]);

  const postModuleLogMutation = usePostModuleLog();

  const loadCalendarSchedule = useCallback(() => {
    let newSchedulesData = schedulesData!.data;

    if (classificationKeyword === "내 일정") {
      newSchedulesData = newSchedulesData.filter(
        (schedule) =>
          schedule.target.indexOf(String(memberData?.data.classroom.grade)) >
            -1 || schedule.target === "전교생"
      );
    }

    newSchedulesData!.forEach((schedule) =>
      setHandleSchedule((prev) => {
        const newHandleCalendarSchedule = calendarScheduleTransform(schedule);
        return [...prev, newHandleCalendarSchedule];
      })
    );
  }, [classificationKeyword, memberData?.data.classroom.grade, schedulesData]);

  const calendarScheduleTransform = (schedule: Schedule) => {
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
      state: null,
    };

    return newHandleSchedule;
  };

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
    setHandleSchedule([]);

    if (schedulesData?.data && !isLoading) {
      loadCalendarSchedule();
    }
  }, [schedulesData?.data, isLoading, loadCalendarSchedule]);

  useEffect(() => {
    if (
      !token.getToken(ACCESS_TOKEN_KEY) ||
      !token.getToken(REFRESH_TOKEN_KEY)
    ) {
      window.alert("토큰이 위조 됐습니다");
      window.location.href = "http://dodam.b1nd.com/sign";
    }
  }, []);

  useEffect(() => {
    if (schedulesData?.data && !isLoading) {
      handleSchedules(classificationKeyword);
    }
  }, [schedulesData?.data, isLoading, classificationKeyword]);

  return {
    schedules,
    handleSchedule,
  };
};

export default useHomeSchedule;
