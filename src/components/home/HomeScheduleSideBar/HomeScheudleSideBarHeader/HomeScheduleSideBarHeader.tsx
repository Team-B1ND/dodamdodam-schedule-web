import dayjs from "dayjs";
import { useRecoilValue } from "recoil";
import { scheduleClassificationKeyword } from "../../../../store/schedule/schedule.store";
import HomeScheduleSideBarHeaderDropdown from "./HomeScheduleSideBarHeaderDropdown/HomeScheduleSideBarHeaderDropdown";
import {
  HomeScheduleSideBarHeaderClassificationText,
  HomeScheduleSideBarHeaderContainer,
  HomeScheduleSideBarHeaderTimeWrap,
  HomeScheduleSideBarHeaderWrap,
} from "./style";

interface Props {
  date: string;
}

const HomeScheduleSideBarHeader = ({ date }: Props) => {
  const classificationKeyword = useRecoilValue(scheduleClassificationKeyword);

  return (
    <HomeScheduleSideBarHeaderContainer>
      <HomeScheduleSideBarHeaderWrap>
        <HomeScheduleSideBarHeaderTimeWrap>
          {date}
        </HomeScheduleSideBarHeaderTimeWrap>
        ~
        <HomeScheduleSideBarHeaderTimeWrap>
          {`${date.slice(0, 8)}${dayjs(date).daysInMonth()}`}
        </HomeScheduleSideBarHeaderTimeWrap>
      </HomeScheduleSideBarHeaderWrap>
      <HomeScheduleSideBarHeaderWrap>
        <HomeScheduleSideBarHeaderClassificationText>
          {classificationKeyword}
        </HomeScheduleSideBarHeaderClassificationText>
        <HomeScheduleSideBarHeaderDropdown />
      </HomeScheduleSideBarHeaderWrap>
    </HomeScheduleSideBarHeaderContainer>
  );
};

export default HomeScheduleSideBarHeader;
