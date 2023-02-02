import {
  HomeScheduleHeaderArrowButton,
  HomeScheduleHeaderArrowButtonWrap,
  HomeScheduleHeaderColorSetWrap,
  HomeScheduleHeaderContainer,
  HomeScheduleHeaderDate,
  HomeScheduleHeaderTodayButton,
} from "./style";
import { RiArrowLeftSLine } from "@react-icons/all-files/ri/RiArrowLeftSLine";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";
import { HOME_SCHEDULE_HEADER_COLORSET_LIST } from "../../../../constants/homeSchedule/homeSchedule.constant";
import HomeScheduleHeaderColorSetItem from "./HomeScheduleHeaderColorSetItem/HomeScheduleHeaderColorSetItem";
import React from "react";

interface Props {
  date: string;
  nextMonth: () => void;
  prevMonth: () => void;
  todayMonth: () => void;
}

const HomeScheduleHeader = ({
  date,
  nextMonth,
  prevMonth,
  todayMonth,
}: Props) => {
  return (
    <HomeScheduleHeaderContainer>
      <HomeScheduleHeaderTodayButton onClick={todayMonth}>
        오늘
      </HomeScheduleHeaderTodayButton>
      <HomeScheduleHeaderArrowButtonWrap>
        <HomeScheduleHeaderArrowButton onClick={prevMonth}>
          <RiArrowLeftSLine />
        </HomeScheduleHeaderArrowButton>
        <HomeScheduleHeaderArrowButton onClick={nextMonth}>
          <RiArrowRightSLine />
        </HomeScheduleHeaderArrowButton>
      </HomeScheduleHeaderArrowButtonWrap>
      <HomeScheduleHeaderDate>{date.slice(0, 7)}</HomeScheduleHeaderDate>
      <HomeScheduleHeaderColorSetWrap>
        {HOME_SCHEDULE_HEADER_COLORSET_LIST.map((colorSet) => (
          <HomeScheduleHeaderColorSetItem
            {...colorSet}
            key={`HomeScheduleHeaderColorSetItem ${colorSet.backgroundColor}`}
          />
        ))}
      </HomeScheduleHeaderColorSetWrap>
    </HomeScheduleHeaderContainer>
  );
};

export default React.memo(HomeScheduleHeader);
