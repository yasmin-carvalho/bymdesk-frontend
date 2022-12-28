import { api } from "../api";
import { IGetTicketsDTOResponse } from "./dtos/IGetTicketsDTOResponse";

export default class AdminService {
  private route = "tickets/admin";

  public async getTickets(): Promise<IGetTicketsDTOResponse[]> {
    const { data } = await api.get<IGetTicketsDTOResponse[]>(this.route);
    return data;
  }
}
