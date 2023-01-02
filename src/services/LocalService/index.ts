import { api } from "../api";
import { IGetLocalkDTORequest } from "./dtos/IGetLocalDTOResponse";
import { IPostLocalkDTORequest } from "./dtos/IPostLocalDTORequest";
export default class LocalService {
  private route = "/locais/";

  public async local(
    dataRequest: IPostLocalkDTORequest
  ): Promise<IPostLocalkDTORequest> {
    const { data } = await api.post<IPostLocalkDTORequest>(
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
