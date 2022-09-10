import { palette } from "../../style/palette";

export const HOME_SCHEDULE_HEADER_COLORSET_LIST = [
  { backgroundColor: palette.schedule[1], text: "1학년" },
  { backgroundColor: palette.schedule[2], text: "2학년" },
  { backgroundColor: palette.schedule[3], text: "3학년" },
  { backgroundColor: palette.schedule[4], text: "전교생" },
  { backgroundColor: palette.schedule[5], text: "기타" },
];

export const HOME_SCHEDULE_SIDE_BAR_HEADER_DROPDOWN_ITEMS = [
  "전체 일정",
  "내 일정",
] as const;
