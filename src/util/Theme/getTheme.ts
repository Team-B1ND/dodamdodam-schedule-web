import { THEME_KEY } from "../../constants/Theme/theme.constant";
import { ETheme } from "../../enum/Theme/theme.enum";

export const getTheme = (): ETheme => {
  const themeMode = window.localStorage.getItem(THEME_KEY);

  if (typeof window !== "undefined" && themeMode === null) {
    const isDarkTheme: boolean = window.matchMedia(
      `(prefers-color-scheme: light)`
    ).matches;

    if (isDarkTheme) {
      return ETheme.DARK;
    }
    return ETheme.LIGHT;
  }

  const theme: ETheme = themeMode as ETheme;

  if (theme === ETheme.DARK) {
    return ETheme.DARK;
  }

  return ETheme.LIGHT;
};
