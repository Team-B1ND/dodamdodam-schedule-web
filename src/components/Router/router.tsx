import { Route, Routes } from "react-router-dom";
import HomePage from "src/pages";
import PageTemplagte from "../Common/PageTemplate/PageTemplate";
import { DodamNotFoundPage } from "@b1nd/dds-web";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PageTemplagte />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<DodamNotFoundPage />} />
    </Routes>
  );
};

export default Router;
