import * as S from './style'
import Calendar from '@toast-ui/react-calendar'
import '@toast-ui/calendar/dist/toastui-calendar.min.css'
import { ChevronLeft, ChevronRight } from '@b1nd/dds-web'
import { SCHEDULE_CATEGORY_ITEMS } from 'src/constants/Schedule/schedule.constant'
import { useSchedule } from 'src/hooks/Schedule/useSchedule'
import dateTransform from 'src/util/Transform/dateTransform'
import { useEffect, useState } from 'react'

const ScheduleCalendar = () => {
  const { date, schedule, calendarRef, handleChangeDate } = useSchedule()
  const [calendarHeight, setCalendarHeight] = useState('600px')

  useEffect(() => {
    const updateHeight = () => {
      const height = window.innerWidth > 834 ? '600px' : '680px'
      setCalendarHeight(height)
    }

    // 초기 높이 설정
    updateHeight()

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', updateHeight)

    // 컴포넌트 언마운트 시 리스너 제거
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return (
    <S.Container>
      <S.CalendarHeader>
        <S.Title>일정</S.Title>
        <S.DateWrap>
          <S.IconWrap onClick={() => handleChangeDate('decrease')}>
            <ChevronLeft size={16} color='labelAssistive' />
          </S.IconWrap>
          <S.Date>{dateTransform.formatDate(date)}</S.Date>
          <S.IconWrap onClick={() => handleChangeDate('increase')}>
            <ChevronRight size={16} color='labelAssistive' />
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
            height={calendarHeight} // 화면 높이의 80%
            view='month' // 'day', 'week' 가능
            month={{
              dayNames: ['일', '월', '화', '수', '목', '금', '토'],
              visibleEventCount: 2,
            }}
            isReadOnly
            useDetailPopup
            events={schedule}
          />
        </S.CalendarWrap>
      </S.CalendarFooter>
    </S.Container>
  )
}

export default ScheduleCalendar
