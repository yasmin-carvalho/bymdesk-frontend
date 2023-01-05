import { EnumTypeTicket } from "../../../constants/enums";

export interface IPostTicketDTORequest {
  solicitante_id: number;
  tipo: EnumTypeTicket;
  local: number;
}
