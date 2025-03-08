import * as S from './style'
import Schedule from 'src/components/Home/ScheduleCalendar'
import ScheduleList from 'src/components/Home/ScheduleList'

const HomePage = () => {
  return (
    <S.SchedulePage>
      <S.SchduleWrap>
        <Schedule />
        <ScheduleList />
      </S.SchduleWrap>
    </S.SchedulePage>
  )
}

export default HomePage
