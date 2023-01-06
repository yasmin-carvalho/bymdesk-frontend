import { api } from "../api";
import { IGetMessageDTOResponse } from "./dtos/IGetMessageDTOResponse";

export default class MessageService {
  private route = "mensagens/?ticket_id";

  public async getMessages(
    idTicket: number
  ): Promise<IGetMessageDTOResponse[]> {
    const { data } = await api.get<IGetMessageDTOResponse[]>(
      `${this.route}=${idTicket}`
    );
    return data;
  }
}
