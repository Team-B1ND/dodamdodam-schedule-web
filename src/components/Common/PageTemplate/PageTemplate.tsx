import { PageTemplateContainer } from "./style";
import { DodamNavBar } from "@b1nd/dds-web";
import { useAuth } from "src/hooks/Auth/useAuth";
import { useThemes } from "src/hooks/Theme/useTheme";
import { Outlet } from "react-router-dom";

const PageTemplagte = () => {
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
      <Outlet />
    </PageTemplateContainer>
  );
};

export default PageTemplagte;
