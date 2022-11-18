import { ClientTicket } from "./pages/ClientTicket";
import { CreateLoginAnalystc } from "./pages/CreateLoginAnalyst";
import { CreateLoginClient } from "./pages/CreateLoginClient";
import { ListTicketClient } from "./pages/ListTicketClient";
import { LoginClient } from "./pages/LoginClient";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <ClientTicket />
      <GlobalStyle />
    </>
  );
}
