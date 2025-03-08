import dayjs from 'dayjs'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { scheduleDateAtom } from 'src/store/Schedule/schedule.store'
import { useGetSchedulesByDate } from 'src/queries/Schedule/schedule.query'
import { eventSchedule, Schedule } from 'src/types/Schedule/schedule.type'
import dataTransform from 'src/util/Transform/dataTransform'
import ToastUIReactCalendar from '@toast-ui/react-calendar'

export const useSchedule = () => {
  const calendarRef = useRef<ToastUIReactCalendar>(null)
  const [date, setDate] = useRecoilState(scheduleDateAtom)
  const [schedule, setSchedule] = useState<eventSchedule[]>([])
  const [sortScheduleGroup, setSortScheduleGroup] = useState<
    Record<string, typeof schedule>
  >({})

  const { data: scheduleData, isLoading } = useGetSchedulesByDate({
    startAt: date,
    endAt: `${date.slice(0, 8)}${dayjs(date).daysInMonth()}`,
  })

  const handleChangeDate = (type: string) => {
    const calendarInstance = calendarRef!.current!.getInstance()

    if (type === 'increase') {
      calendarInstance?.next()
      setDate(dayjs(date).add(1, 'month').format('YYYY-MM-DD'))
    } else {
      calendarInstance?.prev()
      setDate(dayjs(date).subtract(1, 'month').format('YYYY-MM-DD'))
    }
  }

  const calendarScheduleLoad = useCallback(() => {
    scheduleData?.data.forEach((schedule) => {
      // forEach로 변경
      setSchedule((prev) => {
        const newCalendarData = calendarScheduleTransform(schedule)
        return [...prev, newCalendarData]
      })
    })
  }, [scheduleData?.data])

  const calendarScheduleTransform = (schedule: Schedule) => {
    const eventScheduleColor = dataTransform.scheduleTargetTransform(
      dataTransform.scheduleTargetDataTransform(schedule.targetGrades[0])
    )

    const newCalendarScheduleData = {
      id: schedule.id,
      title: schedule.name,
      target: schedule.targetGrades[0],
      attendees: [
        dataTransform.scheduleTargetDataTransform(schedule.targetGrades[0]),
      ],
      location: dataTransform.schedulePlaceTransform(schedule.place),
      category: 'time',
      isReadOnly: true,
      borderColor: eventScheduleColor,
      backgroundColor: eventScheduleColor,
      start: schedule.date[0],
      end: schedule.date[1],
      state: null,
    }

    return newCalendarScheduleData
  }

  useEffect(() => {
    setSchedule([])

    if (scheduleData?.data && !isLoading) {
      calendarScheduleLoad()
    }
  }, [scheduleData?.data, isLoading, calendarScheduleLoad, date])

  useEffect(() => {
    const scheduleGroup = schedule.reduce((acc, item) => {
      const key = item.start

      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(item)
      return acc
    }, {} as Record<string, typeof schedule>)

    const sortScheduleGroup = Object.keys(scheduleGroup)
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime()) // 날짜 순으로 정렬
      .reduce((acc, key) => {
        acc[key] = scheduleGroup[key]
        return acc
      }, {} as Record<string, typeof schedule>)

    setSortScheduleGroup(sortScheduleGroup)
  }, [schedule])

  return {
    date,
    schedule,
    sortScheduleGroup,
    calendarRef,
    handleChangeDate,
  }
}
