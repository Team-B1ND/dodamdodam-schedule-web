import { ReactNode } from "react";
import DarkmodeButton from "../DarkmodeButton/DarkmodeButton";
import NavBar from "../NavBar/NavBar";
import { PageTemplateContainer } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplagte = ({ children }: Props) => {
  return (
    <PageTemplateContainer>
      <NavBar />
      {children}
      <DarkmodeButton />
    </PageTemplateContainer>
  );
};

export default PageTemplagte;
