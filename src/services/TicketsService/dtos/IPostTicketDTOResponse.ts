import { EnumStatus } from "./../../../constants/enums";

export interface IPostTicketDTOResponse {
  id: number;
  solicitante_id: number;
  tipo: string;
  local_id: number;
  status: EnumStatus;
  data: string;
  mensagem: string;
  usuario_id: number;
  bloco_id: number;
}
