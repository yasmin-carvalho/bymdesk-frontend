import { UseFormReset } from "react-hook-form";
import { ToastType } from "../../components/Snackbar/enumToast";
import { useLoading } from "../../contexts/LoadingContext";
import { useToast } from "../../contexts/ToastContext";
import { IFormMatriculationDTO } from "../../dtos/IMatriculationDTO";

export function useMatriculation() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();

  const onSubmit = (
    dataForm: IFormMatriculationDTO,
    reset: UseFormReset<IFormMatriculationDTO>
  ) => {
    console.log(dataForm);
    setLoading(true);

    if (dataForm.matricula === dataForm.confirme_matricula) {
      setTimeout(() => {
        alert(JSON.stringify(dataForm));
        addToast("Analista cadastrado com sucesso", ToastType.success);
        setLoading(false);
        reset();
      }, 2500);
    } else {
      addToast(
        "Campo Matrícula e Confirmar Matrícula não são iguais",
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
