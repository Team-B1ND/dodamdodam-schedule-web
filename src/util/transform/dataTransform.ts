import { palette } from "../../style/palette";

class DataTransform {
  public scheduleTargetTransform(target: string): string {
    switch (target) {
      case "1학년":
        return palette.schedule[1];
      case "2학년":
        return palette.schedule[2];
      case "3학년":
        return palette.schedule[3];
      case "전교생":
        return palette.schedule[4];
      case "기타":
        return palette.schedule[5];

      default:
        return palette.schedule[4];
    }
  }
}

export default new DataTransform();
