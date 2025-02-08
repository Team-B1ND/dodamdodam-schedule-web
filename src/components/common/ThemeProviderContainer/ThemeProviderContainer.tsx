import { ReactNode } from "react";
import useTheme from "../../../hooks/theme/useTheme";
import { DodamThemeProvider, DodamGlobalStyles } from "@b1nd/dds-web";

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  const { themeColor } = useTheme();
  console.log(themeColor)

  return (
    <DodamThemeProvider theme={themeColor}>
      <DodamGlobalStyles />
      {children}
    </DodamThemeProvider>
  );
};

export default ThemeProviderContainer;
