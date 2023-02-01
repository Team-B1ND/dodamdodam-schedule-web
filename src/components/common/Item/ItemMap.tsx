import useHomeSidebarSchedule from "../../../hooks/schedule/useHomeSidebarSchedule";
import HomeScheduleSideBarItem from "../../home/HomeScheduleSideBar/HomeScheduleSideBarItem/HomeScheduleSideBarItem";

const ItemMap = () => {
  const { schedules } = useHomeSidebarSchedule();
  return (
    <>
      {schedules.map((schedule) => (
        <HomeScheduleSideBarItem
          schedule={schedule}
          key={`${schedule.startDate}~${schedule.endDate} ${schedule.target} ${schedule.name}`}
        />
      ))}
    </>
  );
};

export default ItemMap;
