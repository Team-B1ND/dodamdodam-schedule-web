import { atom } from "recoil";
import dateTransform from "../../util/Transform/dateTransform";

export const scheduleDateAtom = atom<string>({
  key: "schedule/scheduleDateAtom",
  default: `${dateTransform.hyphen().slice(0, 8)}01`,
});
