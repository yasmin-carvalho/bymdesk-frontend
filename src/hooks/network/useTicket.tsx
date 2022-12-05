import { ToastType } from "../../components/Snackbar/enumToast";
import { useLoading } from "../../contexts/LoadingContext";
import { useToast } from "../../contexts/ToastContext";
import { IFormRegisterTicket } from "../../dtos/IRegisterTicketDTO";

export function useTicket() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();

  const onSubmitRegisterTicket = (dataForm: IFormRegisterTicket) => {
    console.log("caiuuuu", dataForm);
    setLoading(true);

    setTimeout(() => {
      alert(JSON.stringify(dataForm));
      addToast("Ticket criado com sucesso!", ToastType.success);
      setLoading(false);
    }, 2500);
  };

  return {
    loading,
    setLoading,
    onSubmitRegisterTicket,
  };
}
