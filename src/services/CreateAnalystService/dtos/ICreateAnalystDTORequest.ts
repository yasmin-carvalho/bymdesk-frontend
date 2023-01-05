import { EnumTypeUser } from "./../../../constants/enums";
import { EnumTypeTicket } from "../../../constants/enums";

export interface ICreateAnalystDTORequest {
  matricula: string;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  setor: EnumTypeTicket;
  role: EnumTypeUser;
  admin: boolean;
}
