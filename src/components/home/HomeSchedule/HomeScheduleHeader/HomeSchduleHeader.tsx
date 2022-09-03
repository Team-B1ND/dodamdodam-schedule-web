import {
  HomeScheduleHeaderArrowButton,
  HomeScheduleHeaderArrowButtonWrap,
  HomeScheduleHeaderContainer,
  HomeScheduleHeaderTodayButton,
} from "./style";
import { RiArrowLeftSLine } from "@react-icons/all-files/ri/RiArrowLeftSLine";
import { RiArrowRightSLine } from "@react-icons/all-files/ri/RiArrowRightSLine";

const HomeScheduleHeader = () => {
  return (
    <HomeScheduleHeaderContainer>
      <HomeScheduleHeaderTodayButton>Today</HomeScheduleHeaderTodayButton>
      <HomeScheduleHeaderArrowButtonWrap>
        <HomeScheduleHeaderArrowButton>
          <RiArrowLeftSLine />
        </HomeScheduleHeaderArrowButton>
        <HomeScheduleHeaderArrowButton>
          <RiArrowRightSLine />
        </HomeScheduleHeaderArrowButton>
      </HomeScheduleHeaderArrowButtonWrap>
    </HomeScheduleHeaderContainer>
  );
};

export default HomeScheduleHeader;
