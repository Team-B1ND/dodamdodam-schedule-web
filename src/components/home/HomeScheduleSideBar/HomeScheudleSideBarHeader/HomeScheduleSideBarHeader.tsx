import dayjs from "dayjs";
import { useRecoilValue } from "recoil";
import {
  scheduleClassificationKeyword,
  scheduleDateAtom,
} from "../../../../store/schedule/schedule.store";
import HomeScheduleSideBarHeaderDropdown from "./HomeScheduleSideBarHeaderDropdown/HomeScheduleSideBarHeaderDropdown";
import {
  HomeScheduleSideBarHeaderClassificationText,
  HomeScheduleSideBarHeaderContainer,
  HomeScheduleSideBarHeaderTimeWrap,
  HomeScheduleSideBarHeaderWrap,
} from "./style";

const HomeScheduleSideBarHeader = () => {
  const classificationKeyword = useRecoilValue(scheduleClassificationKeyword);
  const date = useRecoilValue(scheduleDateAtom);
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
