import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Admin } from "../pages/Admin";
import { AnalystPortal } from "../pages/AnalystPortal";
import { ClientTicket } from "../pages/ClientTicket";
import { CreateLoginAnalystc } from "../pages/CreateLoginAnalyst";
import { CreateLoginClient } from "../pages/CreateLoginClient";
import { LoginClient } from "../pages/LoginClient";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ygor */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/portal-do-analista" element={<AnalystPortal />} />
        <Route path="/ticket-do-cliente" element={<ClientTicket />} />

        {/* Yasmin */}
        <Route path="/registro-analista" element={<CreateLoginAnalystc />} />
        <Route path="/registro-cliente" element={<CreateLoginClient />} />
        <Route path="/login" element={<LoginClient />} />

        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </BrowserRouter>
  );
}
