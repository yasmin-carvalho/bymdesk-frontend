import { api } from "../api";
import { IMatriculationDTORequest } from "./dtos/IMatriculationDTORequest";
import { IMatriculationDTOResponse } from "./dtos/IMatriculationDTOResponse";

export default class MatriculationService {
  private route = "/matriculas/";

  public async matriculation(
    dataRequest: IMatriculationDTORequest
  ): Promise<IMatriculationDTOResponse> {
    const { data } = await api.post<IMatriculationDTOResponse>(
      this.route,
      dataRequest
    );
    return data;
  }
}
