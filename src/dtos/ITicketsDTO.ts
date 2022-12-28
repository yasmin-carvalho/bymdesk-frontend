import { EnumStatus } from "../constants/enums";

export interface ITicketsDTO {
  id: number;
  tipo: string;
  data: string;
  status: EnumStatus;
  solicitante_id: number;
  analista_id: number;
  local_id: number;
}
