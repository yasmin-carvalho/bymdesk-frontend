export interface ICreateClientDTOResponse {
  id: number;
  nome: string;
  email: string;
  senha: string;
  telefone?: string;
  role: string;
  admin: boolean;
}
