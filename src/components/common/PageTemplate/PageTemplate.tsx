import { ReactNode } from "react";
import DarkmodeButton from "../DarkmodeButton/DarkmodeButton";
import { PageTemplateContainer } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplagte = ({ children }: Props) => {
  return (
    <PageTemplateContainer>
      {children}
      {/* <DarkmodeButton /> */}
    </PageTemplateContainer>
  );
};

export default PageTemplagte;
