import { useCallback, useEffect, useState } from "react";
import { useGetSchedulesByDate } from "../../queries/schedule/schedule.query";
import dayjs from "dayjs";
import dataTransform from "../../util/transform/dataTransform";
import { useRecoilValue } from "recoil";
import { scheduleClassificationKeyword, scheduleDateAtom } from "../../store/schedule/schedule.store";
import { Schedule } from "../../types/schedule/schedule.type";
import { useGetMember } from "../../queries/member/member.query";
import token from "../../lib/token/token";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../constants/token/token.constant";

const useCalendarSchedules = () => {
  const date = useRecoilValue(scheduleDateAtom);
  const [handleSchedule, setHandleSchedule] = useState<any[]>([]);
  const classificationKeyword = useRecoilValue(scheduleClassificationKeyword); //전체일정, 내일정

  const { data: memberData } = useGetMember();

  const { data: schedulesData, isLoading } = useGetSchedulesByDate({
    startAt: date,
    endAt: `${date.slice(0, 8)}${dayjs(date).daysInMonth()}`,
  });

  const loadCalendarSchedule = useCallback(() => {
    let newSchedulesData = schedulesData!.data;

    if (classificationKeyword === "내 일정") {
      newSchedulesData = newSchedulesData.filter(
        (schedule) =>
          schedule.targetGrades[0].indexOf(String(memberData?.data.student.grade)) > -1 ||
          schedule.targetGrades[0] === "전교생",
      );
    }
    newSchedulesData!.forEach((schedule) =>
      setHandleSchedule((prev) => {
        const newHandleCalendarSchedule = calendarScheduleTransform(schedule);
        return [...prev, newHandleCalendarSchedule];
      }),
    );
  }, [classificationKeyword, memberData?.data?.student?.grade, schedulesData]);

  const calendarScheduleTransform = (schedule: Schedule) => {
    const scheduleColor = dataTransform.scheduleTargetTransform(
      dataTransform.scheduleTargetDataTransform(schedule.targetGrades[0]),
    );

    const newHandleSchedule = {
      id: schedule.id,
      title: schedule.name,
      target: schedule.targetGrades[0],
      attendees: [dataTransform.scheduleTargetDataTransform(schedule.targetGrades[0])],
      location: schedule.place === "ETC" ? "기타" : dataTransform.schedulePlaceTransform(schedule.place),
      category: "time",
      isReadOnly: true,
      borderColor: scheduleColor,
      backgroundColor: scheduleColor,
      start: schedule.date[0],
      end: schedule.date[1],
      state: null,
    };

    return newHandleSchedule;
  };

  useEffect(() => {
    setHandleSchedule([]);

    if (schedulesData?.data && !isLoading) {
      loadCalendarSchedule();
    }
  }, [schedulesData?.data, isLoading, loadCalendarSchedule]);

  useEffect(() => {
    if (!token.getToken(ACCESS_TOKEN_KEY) || !token.getToken(REFRESH_TOKEN_KEY)) {
      window.alert("토큰이 위조 됐습니다");
      window.location.href = "http://dodam.b1nd.com/sign";
    }
  }, []);

  return {
    handleSchedule,
  };
};

export default useCalendarSchedules;
