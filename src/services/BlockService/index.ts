import { api } from "../api";
import { IGetBlocksDTOResponse } from "./dtos/IGetBlocksDTOResponse";
import { IPostBlockDTORequest } from "./dtos/IPostBlockDTORequest";
import { IPostBlockDTOResponse } from "./dtos/IPostBlockDTOResponse";

export default class BlockService {
  private route = "/blocos/";

  public async getBlocks(): Promise<IGetBlocksDTOResponse[]> {
    const { data } = await api.get<IGetBlocksDTOResponse[]>(this.route);
    return data;
  }

  public async postBlock(
    dataRequest: IPostBlockDTORequest
  ): Promise<IPostBlockDTOResponse> {
    const { data } = await api.post<IPostBlockDTOResponse>(
      this.route,
      dataRequest
    );
    return data;
  }
}
