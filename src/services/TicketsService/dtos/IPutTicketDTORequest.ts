import { EnumStatus } from "../../../constants/enums";

export interface IPutTicketDTORequest {
  ticket_id: number;
  analista_id: number;
  status: EnumStatus;
}
