import { UseFormReset } from "react-hook-form";
import { ToastType } from "../../components/Snackbar/enumToast";
import { useLoading } from "../../contexts/LoadingContext";
import { useToast } from "../../contexts/ToastContext";
import { IFormBlockDTO } from "../../dtos/IBlockDTO";

export function useBlock() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();

  const onSubmit = (
    dataForm: IFormBlockDTO,
    reset: UseFormReset<IFormBlockDTO>
  ) => {
    console.log(dataForm);
    setLoading(true);

    if (dataForm.bloco === dataForm.confirme_bloco) {
      setTimeout(() => {
        alert(JSON.stringify(dataForm));
        addToast("Bloco cadastrado com sucesso", ToastType.success);
        setLoading(false);
        reset();
      }, 2500);
    } else {
      addToast("Campo Bloco e Confirmar Bloco não são iguais", ToastType.error);
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
