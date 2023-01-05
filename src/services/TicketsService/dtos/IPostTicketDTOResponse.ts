import { EnumStatus } from "./../../../constants/enums";

export interface IPostTicketDTOResponse {
  id: number;
  solicitante_id: number;
  tipo: string;
  bloco_id: number;
  local_id: number;
  status: EnumStatus;
  mensagem: string;
  usuario_id: number;
}
