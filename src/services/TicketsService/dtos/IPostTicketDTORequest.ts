import { EnumStatus, EnumTypeTicket } from "../../../constants/enums";

export interface IPostTicketDTORequest {
  solicitante_id: number;
  tipo: EnumTypeTicket;
  bloco_id: number;
  local_id: number;
  descricao: string;
  imagem: string | File;
  status: EnumStatus.Inicializado;
}
