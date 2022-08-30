import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot } from "recoil";
import App from "./App";
import PageTemplagte from "./components/common/PageTemplate/PageTemplate";
import ThemeProviderContainer from "./components/common/ThemeProviderContainer/ThemeProviderContainer";

const queryClient = new QueryClient();

const Root = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProviderContainer>
          <PageTemplagte>
            <App />
          </PageTemplagte>
        </ThemeProviderContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Root;
