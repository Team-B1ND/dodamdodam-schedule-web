import { ReactNode } from "react";
import useTheme from "../../../hooks/theme/useTheme";
import GlobalStyle from "../../../style/GlobalStyle";
import { DodamThemeProvider } from "@b1nd/dds-web"

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  const { themeColor } = useTheme();

  return (
    <DodamThemeProvider theme={themeColor}>
      <GlobalStyle />
      {children}
    </DodamThemeProvider>
  );
};

export default ThemeProviderContainer;
