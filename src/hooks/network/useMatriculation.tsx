import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastType } from "../../components/Snackbar/enumToast";
import { RoutesEnum } from "../../constants/routesList";

import { IFormMatriculationDTO } from "../../dtos/IMatriculationDTO";
import MatriculationService from "../../services/MatriculationService";
import { useLoading } from "../useLoading";
import { useToast } from "../useToast";

export function useMatriculation() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();

  const matriculationService = new MatriculationService();

  const onSubmit = async (
    dataForm: IFormMatriculationDTO,
    reset: UseFormReset<IFormMatriculationDTO>
  ) => {
    setLoading(true);

    try {
      if (dataForm.matricula === dataForm.confirme_matricula) {
        await matriculationService.matriculation(dataForm);
        addToast("Matrícula cadastrada com sucesso!", ToastType.success);
        navigate(RoutesEnum.ADMIN);
      } else {
        throw new Error("Matriculas não coincidem");
      }
    } catch (error) {
      addToast("ERRO!", ToastType.error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    onSubmit,
  };
}
