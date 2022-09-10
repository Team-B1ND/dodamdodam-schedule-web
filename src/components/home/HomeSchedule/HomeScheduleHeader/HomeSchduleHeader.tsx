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
  handleMonth: (scope: "next" | "prev" | "today") => void;
}

const HomeScheduleHeader = ({ date, handleMonth }: Props) => {
  return (
    <HomeScheduleHeaderContainer>
      <HomeScheduleHeaderTodayButton onClick={() => handleMonth("today")}>
        오늘
      </HomeScheduleHeaderTodayButton>
      <HomeScheduleHeaderArrowButtonWrap>
        <HomeScheduleHeaderArrowButton onClick={() => handleMonth("prev")}>
          <RiArrowLeftSLine />
        </HomeScheduleHeaderArrowButton>
        <HomeScheduleHeaderArrowButton onClick={() => handleMonth("next")}>
          <RiArrowRightSLine />
        </HomeScheduleHeaderArrowButton>
      </HomeScheduleHeaderArrowButtonWrap>
      <HomeScheduleHeaderDate>{date.slice(0, 7)}</HomeScheduleHeaderDate>
      <HomeScheduleHeaderColorSetWrap>
        {HOME_SCHEDULE_HEADER_COLORSET_LIST.map((colorSet) => (
          <HomeScheduleHeaderColorSetItem {...colorSet} />
        ))}
      </HomeScheduleHeaderColorSetWrap>
    </HomeScheduleHeaderContainer>
  );
};

export default React.memo(HomeScheduleHeader);
