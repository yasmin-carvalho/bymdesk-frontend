import { api } from "../api";
import { IGetTicketsDTOResponse } from "./dtos/IGetTicketsDTOResponse";
import { IPutTicketDTOResponse } from "./dtos/IPutTicketDTOResponse";
import { IPutTicketDTORequest } from "./dtos/IPutTicketDTORequest";
import { IPostTicketDTORequest } from "./dtos/IPostTicketDTORequest";
import { IPostTicketDTOResponse } from "./dtos/IPostTicketDTOResponse";

export default class AdminService {
  private route = "tickets/admin";

  public async postTickets(
    dataRequest: IPostTicketDTORequest
  ): Promise<IPostTicketDTOResponse> {
    const formData = new FormData();
    formData.append("solicitante_id", dataRequest.solicitante_id.toString());
    formData.append("tipo", dataRequest.tipo);
    formData.append("bloco_id", dataRequest.bloco_id.toString());
    formData.append("local_id", dataRequest.local_id.toString());
    formData.append("descricao", dataRequest.descricao);
    formData.append("imagem", dataRequest.imagem);
    formData.append("status", dataRequest.status);

    const { data } = await api.post<IPostTicketDTOResponse>(
      "solicitante/criarTicket",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  }

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
