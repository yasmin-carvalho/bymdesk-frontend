import { EnumTypeTicket, EnumTypeUser } from "../../../constants/enums";

export interface ICreateAnalystDTOResponse {
  matricula: number;
  nome: string;
  email: string;
  senha: number;
  telefone: number;
  setor: EnumTypeTicket;
  role: EnumTypeUser;
}
