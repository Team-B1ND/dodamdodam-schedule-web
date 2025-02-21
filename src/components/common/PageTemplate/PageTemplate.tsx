import { ReactNode } from "react";
import { PageTemplateContainer } from "./style";
import { DodamNavBar } from "@b1nd/dds-web";
import { useAuth } from "src/hooks/Auth/useAuth";
import { useThemes } from "src/hooks/Theme/useTheme";

interface Props {
  children: ReactNode;
}

const PageTemplagte = ({ children }: Props) => {
  const { handleClickLogout } = useAuth();
  const { themeColor, handleTheme } = useThemes();

  return (
    <PageTemplateContainer>
      <DodamNavBar
        location="schedule"
        currentTheme={themeColor}
        handleTheme={handleTheme}
        logout={handleClickLogout}
      />
      {children}
    </PageTemplateContainer>
  );
};

export default PageTemplagte;
