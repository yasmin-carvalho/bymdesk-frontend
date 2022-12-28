import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastType } from "../../components/Snackbar/enumToast";
import { RoutesEnum } from "../../constants/routesList";
import { useLoading } from "../../contexts/LoadingContext";
import { useToast } from "../../contexts/ToastContext";
import { IFormLocationDTO } from "../../dtos/ILocationDTO";
import LocalService from "../../services/LocalService";

export function useLocation() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();

  const localtionService = new LocalService();

  const onSubmit = async (
    dataForm: IFormLocationDTO,
    reset: UseFormReset<IFormLocationDTO>
  ) => {
    setLoading(true);

    try {
      if (dataForm.nome === dataForm.confirme_localizacao) {
        const response = await localtionService.local(dataForm);
        console.log(response);
        addToast("Local cadastrado com sucesso!", ToastType.success);
        navigate(RoutesEnum.ADMIN);
      } else {
        throw new Error("Locais não coincidem");
      }
    } catch (error) {
      addToast(
        error?.response ? "Erro interno no servidor!" : error.message,
        ToastType.error
      );
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
