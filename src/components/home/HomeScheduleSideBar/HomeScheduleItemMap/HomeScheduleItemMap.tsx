import useHomeSidebarSchedule from "../../../../hooks/schedule/useHomeSidebarSchedule";
import HomeScheduleSideBarItem from "../HomeScheduleSideBarItem/HomeScheduleSideBarItem";

const HomeScheduleItemMap = () => {
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

export default HomeScheduleItemMap;
