export interface ICreateClientDTORequest {
  nome: string;
  telefone?: string;
  email: string;
  senha: string;
  role: "analyst" | "client" | "admin";
  admin: boolean;
}
