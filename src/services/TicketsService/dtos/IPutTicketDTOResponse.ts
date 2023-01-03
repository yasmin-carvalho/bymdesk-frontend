import { EnumStatus } from "../../../constants/enums";

export interface IPutTicketDTOResponse {
  id: number;
  status: EnumStatus;
  solicitante_id: number;
  analista_id: number;
  local_id: number;
  nome_local: string;
  bloco_id: number;
  nome_bloco: string;
  tipo: string;
  data: string;
}
