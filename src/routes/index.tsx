import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Admin } from "../pages/Admin";
import { AnalystPortal } from "../pages/AnalystPortal";
import { ClientTicket } from "../pages/ClientTicket";
import { CreateLoginAnalystc } from "../pages/CreateLoginAnalyst";
import { CreateClient } from "../pages/CreateClient";
import { LoginClient } from "../pages/LoginClient";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/portal-do-analista" element={<AnalystPortal />} />
        <Route path="/ticket-do-cliente" element={<ClientTicket />} />
        <Route path="/registro-analista" element={<CreateLoginAnalystc />} />
        <Route path="/registro-cliente" element={<CreateClient />} />
        <Route path="/login" element={<LoginClient />} />

        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </BrowserRouter>
  );
}
