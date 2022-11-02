import { atom } from "recoil";
import dateTransform from "../../util/transform/dateTransform";

export const scheduleDateAtom = atom<string>({
  key: "schedule/scheduleDateAtom",
  default: `${dateTransform.hyphen().slice(0, 8)}01`,
});

export const scheduleClassificationKeyword = atom<"전체 일정" | "내 일정">({
  key: "schedule/scheduleClassificationKeyword",
  default: "전체 일정",
});
