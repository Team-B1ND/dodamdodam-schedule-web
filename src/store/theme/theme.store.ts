import { atom } from "recoil";
import { getTheme } from "../../util/theme/getTheme";

export const themeModeAtom = atom({
  key: "theme/themeModeAtom",
  default: getTheme(),
});
