import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot } from "recoil";
import Router from "./components/Router/router";
import ThemeProviderContainer from "./components/Common/ThemeProviderContainer/ThemeProviderContainer";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter basename="schedule">
          <ThemeProviderContainer>
            <Router />
          </ThemeProviderContainer>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Root;
