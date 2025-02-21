import * as S from "./style";
import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import { ChevronLeft, ChevronRight } from "@b1nd/dds-web";
import { SCHEDULE_CATEGORY_ITEMS } from "src/constants/Schedule/schedule.constant";
import { useSchedule } from "src/hooks/Schedule/useSchedule";
import dateTransform from "src/util/transform/dateTransform";

const ScheduleCalendar = () => {
  const { date, schedule, calendarRef, handleChangeDate } = useSchedule();

  return (
    <S.Container>
      <S.CalendarHeader>
        <S.Title>일정</S.Title>
        <S.DateWrap>
          <S.IconWrap onClick={() => handleChangeDate("decrease")}>
            <ChevronLeft size={16} color="labelAssistive" />
          </S.IconWrap>
          <S.Date>{dateTransform.formatDate(date)}</S.Date>
          <S.IconWrap onClick={() => handleChangeDate("increase")}>
            <ChevronRight size={16} color="labelAssistive" />
          </S.IconWrap>
        </S.DateWrap>
      </S.CalendarHeader>
      <S.CalendarFooter>
        <S.Category>
          {SCHEDULE_CATEGORY_ITEMS.map((item) => (
            <S.Item>
              <S.Color color={item.color} />
              <S.Text>{item.text}</S.Text>
            </S.Item>
          ))}
        </S.Category>
        <S.CalendarWrap>
          <Calendar
            ref={calendarRef}
            height="577px"
            view="month" // 'day', 'week' 가능
            month={{
              dayNames: ["일", "월", "화", "수", "목", "금", "토"],
              visibleEventCount: 2,
            }}
            isReadOnly
            useDetailPopup
            events={schedule}
          />
        </S.CalendarWrap>
      </S.CalendarFooter>
    </S.Container>
  );
};

export default ScheduleCalendar;
