import { api } from "../api";
import { ILoginAnalystDTORequest } from "./dtos/ILoginAnalystDTORequest";
import { ILoginAnalystDTOResponse } from "./dtos/ILoginAnalystDTOResponse";

export default class AuthService {
  private route = "/login";

  public async login(
    dataRequest: ILoginAnalystDTORequest
  ): Promise<ILoginAnalystDTOResponse> {
    const { data } = await api.post<ILoginAnalystDTOResponse>(
      this.route,
      dataRequest
    );
    return data;
  }
}
