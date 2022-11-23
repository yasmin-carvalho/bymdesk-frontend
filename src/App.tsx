import { AnalystPortal } from "./pages/AnalystPortal";
import { ClientTicket } from "./pages/ClientTicket";
import { CreateLoginAnalystc } from "./pages/CreateLoginAnalyst";
import { CreateLoginClient } from "./pages/CreateLoginClient";
import { LoginClient } from "./pages/LoginClient";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <CreateLoginAnalystc />
      <GlobalStyle />
    </>
  );
}
