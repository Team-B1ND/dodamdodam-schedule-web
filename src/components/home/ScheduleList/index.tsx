import dayjs from "dayjs";
import "dayjs/locale/ko";
import * as S from "./style";
import { useSchedule } from "src/hooks/Schedule/useSchedule";
import EmptySkeleton from "src/components/common/Skeleton/EmptySkeleton";

const ScheduleList = () => {
  const { schedule } = useSchedule();

  const scheduleGroup = schedule.reduce((acc, item) => {
    const key = item.start;

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, typeof schedule>);

  const sortScheduleGroup = Object.keys(scheduleGroup)
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime()) // 날짜 순으로 정렬
    .reduce((acc, key) => {
      acc[key] = scheduleGroup[key];
      return acc;
    }, {} as Record<string, typeof schedule>);

  return (
    <S.Container>
      {Object.values(sortScheduleGroup).length === 0 ? (
        <EmptySkeleton title="일정이 없습니다." />
      ) : (
        Object.values(sortScheduleGroup).map((item, idx) => (
          <S.List key={idx}>
            <S.DateWrap>
              <S.DayNum>{dayjs(item[0].start).format("D일")}</S.DayNum>
              <S.DayStr>
                {dayjs(item[0].start).locale("ko").format("dddd")}
              </S.DayStr>
            </S.DateWrap>
            <S.ContentWrap>
              {item.map((item) => (
                <S.Content key={item.id}>
                  <S.Color color={item.backgroundColor} />
                  <S.Text>{item.title}</S.Text>
                </S.Content>
              ))}
            </S.ContentWrap>
          </S.List>
        ))
      )}
    </S.Container>
  );
};

export default ScheduleList;
