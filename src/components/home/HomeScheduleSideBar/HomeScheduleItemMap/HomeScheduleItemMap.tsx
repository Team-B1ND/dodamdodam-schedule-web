import useHomeSidebarSchedule from "../../../../hooks/schedule/useHomeSidebarSchedule";
import HomeScheduleSideBarItem from "../HomeScheduleSideBarItem/HomeScheduleSideBarItem";

const HomeScheduleItemMap = () => {
  const { schedules } = useHomeSidebarSchedule();
  return (
    <>
      {schedules.map((schedule) => (
        <HomeScheduleSideBarItem
          schedule={schedule}
          key={`${schedule.date[0]}~${schedule.date[1]} ${schedule.targetGrades[0]} ${schedule.name}`}
        />
      ))}
    </>
  );
};

export default HomeScheduleItemMap;
