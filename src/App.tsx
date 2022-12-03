import { ToastProvider } from "./contexts/ToastContext";
import { Router } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <ToastProvider>
        <Router />
      </ToastProvider>
      <GlobalStyle />
    </>
  );
}
