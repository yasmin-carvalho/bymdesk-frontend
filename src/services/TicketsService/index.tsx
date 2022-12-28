import { api } from "../api";
import { IGetTicketsDTOResponse } from "./dtos/IGetTicketsDTOResponse";

export default class AdminService {
  private route = "admin/tickets";

  public async getTickets(): Promise<IGetTicketsDTOResponse[]> {
    const { data } = await api.get<IGetTicketsDTOResponse[]>(this.route);
    return data;
  }
}
