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
  console.log(schedule)
  return (
    <HomeScheduleSideBarItemContainer>
      <HomeScheduleSideBarItemTitleWrap>
        <HomeScheduleSideBarItemTitle>
          {schedule.name}
        </HomeScheduleSideBarItemTitle>
        <HomeScheduleSideBarItemTargetWrap
          backgroundColor={dataTransform.scheduleTargetTransform(
            dataTransform.scheduleTargetDataTransform(schedule.targetGrades[0])
          )}
        >
          <HomeScheduleSideBarItemTargetText>
            {dataTransform.scheduleTargetDataTransform(schedule.targetGrades[0])}
          </HomeScheduleSideBarItemTargetText>
        </HomeScheduleSideBarItemTargetWrap>
      </HomeScheduleSideBarItemTitleWrap>
      <HomeScheduleSideBarItemContentWrap>
        <HomeScheduleSideBarItemDate>
          {schedule.date[0] === schedule.date[1]
            ? schedule.date[0]
            : `${schedule.date[0]} ~ ${schedule.date[1]}`}
        </HomeScheduleSideBarItemDate>
      </HomeScheduleSideBarItemContentWrap>
    </HomeScheduleSideBarItemContainer>
  );
};

export default HomeScheduleSideBarItem;
