import { EnumTypeUser } from "../../../constants/enums";

export interface ICreateClientDTORequest {
  nome: string;
  telefone?: string;
  email: string;
  senha: string;
  role: EnumTypeUser;
  admin: boolean;
}
