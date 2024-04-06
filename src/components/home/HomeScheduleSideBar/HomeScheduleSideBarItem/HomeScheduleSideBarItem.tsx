import { Schedule } from "../../../../types/schedule/schedule.type";
import dataTransform from "../../../../util/transform/dataTransform";
import {
  HomeScheduleSideBarItemContainer,
  HomeScheduleSideBarItemContentWrap,
  HomeScheduleSideBarItemTitle,
  HomeScheduleSideBarItemDate,
  HomeScheduleSideBarItemTitleWrap,
  HomeScheduleSideBarItemTargetWrap,
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
        <HomeScheduleSideBarItemTargetWrap
          backgroundColor={dataTransform.scheduleTargetTransform(
            schedule.targetGrades[0]
          )}
        >
          <HomeScheduleSideBarItemTargetText>
            {schedule.targetGrades}
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
