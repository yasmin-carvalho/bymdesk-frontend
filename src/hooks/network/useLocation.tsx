import { useState } from "react";
import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastType } from "../../components/Snackbar/enumToast";
import { RoutesEnum } from "../../constants/routesList";
import { useLoading } from "../../contexts/LoadingContext";
import { useToast } from "../../contexts/ToastContext";
import { IFormLocationDTO, ILocation } from "../../dtos/ILocationDTO";
import LocalService from "../../services/LocalService";

export function useLocation() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();
  const [localesState, setLocalesState] = useState<ILocation[]>([]);

  const localtionService = new LocalService();

  const onSubmit = async (
    { bloco_id, confirme_localizacao, nome }: IFormLocationDTO,
    reset: UseFormReset<IFormLocationDTO>
  ) => {
    setLoading(true);

    try {
      if (nome === confirme_localizacao) {
        await localtionService.local({
          bloco_id: Number(bloco_id.value),
          nome,
        });
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

  const getLocales = async () => {
    setLoading(true);
    try {
      const response = await localtionService.getLocales();
      setLocalesState(response);
    } catch (error) {
      addToast("Erro ao buscar dados de localidades", ToastType.error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    localesState,
    setLoading,
    onSubmit,
    getLocales,
  };
}
