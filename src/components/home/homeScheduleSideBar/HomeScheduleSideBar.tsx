import React from "react";
import { Schedule } from "../../../types/schedule/schedule.type";
import HomeScheduleSideBarItem from "./HomeScheduleSideBarItem/HomeScheduleSideBarItem";
import HomeScheduleSideBarHeader from "./HomeScheudleSideBarHeader/HomeScheduleSideBarHeader";
import {
  HomeScheduleSideBarContainer,
  HomeScheduleSideBarItemWrap,
} from "./style";

interface Props {
  schedules: Schedule[];
  date: string;
}

const HomeScheduleSideBar = ({ schedules, date }: Props) => {
  return (
    <HomeScheduleSideBarContainer>
      <HomeScheduleSideBarHeader date={date} />
      <HomeScheduleSideBarItemWrap>
        {schedules.map((schedule) => (
          <HomeScheduleSideBarItem schedule={schedule} />
        ))}
      </HomeScheduleSideBarItemWrap>
    </HomeScheduleSideBarContainer>
  );
};

export default React.memo(HomeScheduleSideBar);
