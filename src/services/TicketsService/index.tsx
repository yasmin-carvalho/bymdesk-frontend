import { api } from "../api";
import { IGetTicketsDTOResponse } from "./dtos/IGetTicketsDTOResponse";
import { IPutTicketDTOResponse } from "./dtos/IPutTicketDTOResponse";
import { IPutTicketDTORequest } from "./dtos/IPutTicketDTORequest";

export default class AdminService {
  private route = "tickets/admin";

  public async getTickets(): Promise<IGetTicketsDTOResponse[]> {
    const { data } = await api.get<IGetTicketsDTOResponse[]>(this.route);
    return data;
  }

  public async putTickets({
    analista_id,
    status,
    ticket_id,
  }: IPutTicketDTORequest): Promise<IPutTicketDTOResponse> {
    const { data } = await api.put<IPutTicketDTOResponse>(
      `ticket/${ticket_id}/status`,
      { analista_id, status }
    );
    return data;
  }
}
