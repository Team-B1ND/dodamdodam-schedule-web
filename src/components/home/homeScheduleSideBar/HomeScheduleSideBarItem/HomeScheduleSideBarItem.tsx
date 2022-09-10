import { Schedule } from "../../../../types/schedule/schedule.type";
import dataTransform from "../../../../util/transform/dataTransform";
import {
  HomeScheduleSideBarItemContainer,
  HomeScheduleSideBarItemContentWrap,
  HomeScheduleSideBarItemTitle,
  HomeScheduleSideBarItemDate,
  HomeScheduleSideBarItemTitleWrap,
  HomeScheduleSideBarItemTargetWrap,
  HomeScheduleSideBarItemTargetCircle,
  HomeScheduleSideBarItemTargetText,
} from "./style";

interface Props {
  schedule: Schedule;
}

const HomeScheduleSideBarItem = ({ schedule }: Props) => {
  return (
    <HomeScheduleSideBarItemContainer>
      <HomeScheduleSideBarItemTitleWrap>
        <HomeScheduleSideBarItemTitle>
          {schedule.name}
        </HomeScheduleSideBarItemTitle>
        <HomeScheduleSideBarItemTargetWrap>
          <HomeScheduleSideBarItemTargetCircle
            backgroundColor={dataTransform.scheduleTargetTransform(
              schedule.target
            )}
          />
          <HomeScheduleSideBarItemTargetText>
            {schedule.target}
          </HomeScheduleSideBarItemTargetText>
        </HomeScheduleSideBarItemTargetWrap>
      </HomeScheduleSideBarItemTitleWrap>
      <HomeScheduleSideBarItemContentWrap>
        <HomeScheduleSideBarItemDate>
          {schedule.startDate === schedule.endDate
            ? schedule.startDate
            : `${schedule.startDate} ~ ${schedule.endDate}`}
        </HomeScheduleSideBarItemDate>
      </HomeScheduleSideBarItemContentWrap>
    </HomeScheduleSideBarItemContainer>
  );
};

export default HomeScheduleSideBarItem;
