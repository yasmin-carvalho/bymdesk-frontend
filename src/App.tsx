import LoadingProvider from "./contexts/LoadingContext";
import { ToastProvider } from "./contexts/ToastContext";
import { Router } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <LoadingProvider>
        <ToastProvider>
          <Router />
        </ToastProvider>
      </LoadingProvider>
      <GlobalStyle />
    </>
  );
}
