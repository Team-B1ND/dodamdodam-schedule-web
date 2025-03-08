import * as S from "./style";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { useSchedule } from "src/hooks/Schedule/useSchedule";
import EmptySkeleton from "src/components/Common/Skeleton/EmptySkeleton";

const ScheduleList = () => {
  const { sortScheduleGroup } = useSchedule();

  return (
    <S.Container>
      <S.List>
        {Object.values(sortScheduleGroup).length === 0 ? (
          <EmptySkeleton title="일정이 없습니다." />
        ) : (
          Object.values(sortScheduleGroup).map((item, idx) => (
            <div key={idx}>
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
            </div>
          ))
        )}
      </S.List>
    </S.Container>
  );
};

export default ScheduleList;
