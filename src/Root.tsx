import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot } from "recoil";
import PageTemplagte from "./components/common/PageTemplate/PageTemplate";
import ThemeProviderContainer from "./components/common/ThemeProviderContainer/ThemeProviderContainer";
import HomePage from "./pages";

const queryClient = new QueryClient();

const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProviderContainer>
          <PageTemplagte>
            <HomePage />
          </PageTemplagte>
        </ThemeProviderContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Root;
