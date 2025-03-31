import { ReactNode } from "react";
import { useThemes } from "../../../hooks/Theme/useTheme";
import { DodamGlobalStyles } from "@b1nd/dds-web";
import { ThemeProvider } from "styled-components";
import {
  April_Fools_Day_Dark_Theme,
  April_Fools_Day_Light_Theme,
} from "src/style/theme";

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  const { themeColor } = useThemes();

  return (
    <ThemeProvider
      theme={
        themeColor === "LIGHT"
          ? April_Fools_Day_Light_Theme
          : April_Fools_Day_Dark_Theme
      }>
      <DodamGlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
