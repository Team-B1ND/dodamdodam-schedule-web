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
    if (
      !token.getToken(ACCESS_TOKEN_KEY) ||
      !token.getToken(REFRESH_TOKEN_KEY)
    ) {
      window.alert("토큰이 위조 됐습니다");
      window.location.href = "http://dodam.b1nd.com/sign";
    }
  }, []);

  useEffect(() => {
    setHandleSchedule([]);
    setSchedules([]);

    if (schedulesData?.data && !isLoading) {
      schedulesData.data.forEach((schedule) =>
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
            state: null,
          };

          return [...prev, newHandleSchedule];
        })
      );
      setSchedules(schedulesData.data);
    }
  }, [schedulesData?.data, isLoading]);

  const loadMyGradeSchedule = useCallback(() => {
    setSchedules(
      schedulesData?.data.filter(
        (scheudle) =>
          scheudle.target.indexOf(String(memberData?.data.classroom.grade)) >
            -1 || scheudle.target === "전교생"
      )!
    );
  }, [memberData?.data.classroom.grade, schedulesData?.data]);

  const handleSchedules = useCallback(() => {
    setSchedules([]);
    if (classificationKeyword === "전체 일정") {
      setSchedules(schedulesData!.data);
    } else if (classificationKeyword === "내 일정") {
      loadMyGradeSchedule();
    }
  }, [schedulesData, loadMyGradeSchedule, classificationKeyword]);

  useEffect(() => {
    if (schedulesData?.data && !isLoading) {
      handleSchedules();
    }
  }, [schedulesData?.data, isLoading, handleSchedules]);

  useEffect(() => {
    console.log(schedules);
  }, [schedules]);

  return {
    schedules,
    handleSchedule,
  };
};

export default useHomeSchedule;
