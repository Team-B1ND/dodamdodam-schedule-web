import dayjs from "dayjs";
import {
  HomeScheduleSideBarHeaderContainer,
  HomeScheduleSideBarHeaderTimeWrap,
} from "./style";

interface Props {
  date: string;
}

const HomeScheduleSideBarHeader = ({ date }: Props) => {
  return (
    <HomeScheduleSideBarHeaderContainer>
      <HomeScheduleSideBarHeaderTimeWrap>
        {date}
      </HomeScheduleSideBarHeaderTimeWrap>
      ~
      <HomeScheduleSideBarHeaderTimeWrap>
        {`${date.slice(0, 8)}${dayjs(date).daysInMonth()}`}
      </HomeScheduleSideBarHeaderTimeWrap>
    </HomeScheduleSideBarHeaderContainer>
  );
};

export default HomeScheduleSideBarHeader;
