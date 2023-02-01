import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { scheduleDateAtom } from "../../../store/schedule/schedule.store";
import ErrorBoundary from "../../common/\bErorrBoundary";
import ItemMap from "../../common/Item/ItemMap";
import Loader from "../../common/Loader";
import HomeScheduleSideBarHeader from "./HomeScheudleSideBarHeader/HomeScheduleSideBarHeader";
import {
  HomeScheduleSideBarContainer,
  HomeScheduleSideBarItemWrap,
} from "./style";

const HomeScheduleSideBar = () => {
  const date = useRecoilValue(scheduleDateAtom);

  return (
    <HomeScheduleSideBarContainer>
      <HomeScheduleSideBarHeader date={date} />
      <HomeScheduleSideBarItemWrap>
        <ErrorBoundary
          fallback={<h1 style={{ fontSize: "20px" }}>Error :( </h1>}
        >
          <Suspense fallback={<Loader />}>
            <ItemMap />
          </Suspense>
        </ErrorBoundary>
      </HomeScheduleSideBarItemWrap>
    </HomeScheduleSideBarContainer>
  );
};

export default React.memo(HomeScheduleSideBar);
