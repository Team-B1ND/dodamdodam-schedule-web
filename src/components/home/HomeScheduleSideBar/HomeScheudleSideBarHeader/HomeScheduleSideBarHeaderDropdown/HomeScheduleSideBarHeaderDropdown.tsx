import { useState } from "react";
import {
  HomeScheduleSideBarHeaderDropdownContainer,
  HomeScheduleSideBarHeaderDropdownIcon,
  HomeScheduleSideBarHeaderDropdownItem,
  HomeScheduleSideBarHeaderDropdownWrap,
} from "./style";
import { BsFillTriangleFill } from "@react-icons/all-files/bs/BsFillTriangleFill";
import { HOME_SCHEDULE_SIDE_BAR_HEADER_DROPDOWN_ITEMS } from "../../../../../constants/homeSchedule/homeSchedule.constant";
import { useRecoilState } from "recoil";
import { scheduleClassificationKeyword } from "../../../../../store/schedule/schedule.store";

const HomeScheduleSideBarHeaderDropdown = () => {
  const [classificationKeyword, setClassificationKeyword] = useRecoilState(
    scheduleClassificationKeyword
  );

  const [fold, setFold] = useState(true);

  return (
    <HomeScheduleSideBarHeaderDropdownContainer
      onClick={() => setFold((prev) => !prev)}>
      {classificationKeyword}
      <HomeScheduleSideBarHeaderDropdownIcon fold={fold}>
        <BsFillTriangleFill />
      </HomeScheduleSideBarHeaderDropdownIcon>
      {!fold && (
        <HomeScheduleSideBarHeaderDropdownWrap>
          {HOME_SCHEDULE_SIDE_BAR_HEADER_DROPDOWN_ITEMS.map((item, idx) => (
            <HomeScheduleSideBarHeaderDropdownItem
              onClick={() => setClassificationKeyword(item)}
              key={idx}>
              {item}
            </HomeScheduleSideBarHeaderDropdownItem>
          ))}
        </HomeScheduleSideBarHeaderDropdownWrap>
      )}
    </HomeScheduleSideBarHeaderDropdownContainer>
  );
};

export default HomeScheduleSideBarHeaderDropdown;