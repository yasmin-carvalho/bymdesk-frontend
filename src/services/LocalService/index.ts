import { api } from "../api";
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
}
