import { palette } from "../../style/palette";

class DataTransform {
  public scheduleTargetDataTransform(target: string): string {
    switch (target) {
      case "GRADE_1":
        return "1학년";
      case "GRADE_2":
        return "2학년";
      case "GRADE_3":
        return "3학년";
      case "GRADE_ALL":
        return "전교생";
      case "GRADE_ETC":
        return "기타";

      default:
        return "";
    }
  }

  public scheduleTargetTransform(target: string): string {
    switch (target) {
      case "1학년":
        return palette.schedule.red;
      case "2학년":
        return palette.schedule.orange;
      case "3학년":
        return palette.schedule.yellow;
      case "전교생":
        return palette.schedule.green;
      case "기타":
        return palette.schedule.blue;

      default:
        return palette.schedule.green;
    }
  }

  public schedulePlaceTransform(place: string): string {
    switch (place) {
      case "PROGRAMMING_1":
        return "프로그래밍1실";
      case "PROGRAMMING_2":
        return "프로그레밍2실";
      case "PROGRAMMING_3":
        return "프로그래밍3실";
      case "KOREAN":
        return "국어실";
      case "MATH":
        return "수학실";
      case "SOCIETY":
        return "사회실";
      case "HALL":
        return "강당";
      case "AUDIOVISUAL_ROOM":
        return "시청각실";
      case "ETC":
        return "기타"
      case "NONE":
        return "장소없음";
      default:
        return "";
    }
    
  }
}
const dataTransform = new DataTransform();
export default dataTransform;
