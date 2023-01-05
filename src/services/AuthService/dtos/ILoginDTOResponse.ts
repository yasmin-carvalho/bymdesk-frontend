import { EnumTypeUser } from "../../../constants/enums";

export interface ILoginDTOResponse {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  role: EnumTypeUser;
  admin: boolean;
}
