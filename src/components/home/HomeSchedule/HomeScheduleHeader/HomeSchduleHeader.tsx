import {
  HomeScheduleHeaderArrowButton,
  HomeScheduleHeaderArrowButtonWrap,
  HomeScheduleHeaderContainer,
  HomeScheduleHeaderDate,
  HomeScheduleHeaderTodayButton,
} from "./style";
import { RiArrowLeftSLine } from "@react-icons/all-files/ri/RiArrowLeftSLine";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";

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
      <HomeScheduleHeaderDate>{date}</HomeScheduleHeaderDate>
    </HomeScheduleHeaderContainer>
  );
};

export default HomeScheduleHeader;
