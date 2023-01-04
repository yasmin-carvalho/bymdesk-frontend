import { AuthProvider } from "./contexts/AuthContext";
import LoadingProvider from "./contexts/LoadingContext";
import ToastProvider from "./contexts/ToastContext";
import { Router } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <LoadingProvider>
        <ToastProvider>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </ToastProvider>
      </LoadingProvider>
      <GlobalStyle />
    </>
  );
}
