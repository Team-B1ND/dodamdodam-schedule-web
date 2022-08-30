import { ReactNode } from "react";
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
    </PageTemplateContainer>
  );
};

export default PageTemplagte;
