import { api } from "../api";
import { ICreateAnalystDTOResponse } from "./dtos/ICreateAnalystDTOResponse";
import { ICreateAnalystDTORequest } from "./dtos/ICreateAnalystDTORequest";
export default class CreateAnalystService {
  private route = "analista/create";

  public async createAnalyst(
    dataRequest: ICreateAnalystDTORequest
  ): Promise<ICreateAnalystDTOResponse> {
    const { data } = await api.post<ICreateAnalystDTOResponse>(
      this.route,
      dataRequest
    );
    return data;
  }
}
