import { api } from "../api";
import { IGetLocalkDTORequest } from "./dtos/IGetLocalDTOResponse";
import { IPostLocalDTORequest } from "./dtos/IPostLocalDTORequest";
export default class LocalService {
  private route = "/locais/";

  public async local(
    dataRequest: IPostLocalDTORequest
  ): Promise<IPostLocalDTORequest> {
    const { data } = await api.post<IPostLocalDTORequest>(
      this.route,
      dataRequest
    );
    return data;
  }

  public async getLocales(): Promise<IGetLocalkDTORequest[]> {
    const { data } = await api.get<IGetLocalkDTORequest[]>(this.route);
    return data;
  }
}
