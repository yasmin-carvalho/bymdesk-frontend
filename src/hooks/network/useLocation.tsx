import { UseFormReset } from "react-hook-form";
import { ToastType } from "../../components/Snackbar/enumToast";
import { useLoading } from "../../contexts/LoadingContext";
import { useToast } from "../../contexts/ToastContext";
import { IFormLocationDTO } from "../../dtos/ILocationDTO";

export function useLocation() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();

  const onSubmit = (
    dataForm: IFormLocationDTO,
    reset: UseFormReset<IFormLocationDTO>
  ) => {
    console.log(dataForm);
    setLoading(true);

    if (dataForm.localizacao === dataForm.confirme_localizacao) {
      setTimeout(() => {
        alert(JSON.stringify(dataForm));
        addToast("Localização cadastrada com sucesso", ToastType.success);
        setLoading(false);
        reset();
      }, 2500);
    } else {
      addToast(
        "Campo Localização e Confirmar Localização não são iguais",
        ToastType.error
      );
      reset();
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    onSubmit,
  };
}
