import { api } from "../api";
import { ICreateClientDTORequest } from "./dtos/ICreateClientDTORequest";
import { ICreateClientDTOResponse } from "./dtos/ICreateClientDTOResponse";

export default class CreateClienteService {
  private route = "/usuarios/";

  public async createClient(
    dataRequest: ICreateClientDTORequest
  ): Promise<ICreateClientDTOResponse> {
    const { data } = await api.post<ICreateClientDTOResponse>(
      this.route,
      dataRequest
    );
    return data;
  }
}
