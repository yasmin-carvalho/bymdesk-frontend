import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ToastType } from "../../components/Snackbar/enumToast";
import { RoutesEnum } from "../../constants/routesList";
import { useLoading } from "../../contexts/LoadingContext";
import { useToast } from "../../contexts/ToastContext";
import { IFormLogin } from "../../dtos/ILoginDTO";
import { IFormRegisterClient } from "../../dtos/IRegisterClient";
import AuthService from "../../services/AuthService";
import CreateClientService from "../../services/CreateClienteService";

export function useLogin() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();

  const authService = new AuthService();

  const createClient = new CreateClientService();

  const onSubmitRegisterClient = async (
    dataForm: IFormRegisterClient,
    reset: UseFormReset<IFormRegisterClient>
  ) => {
    try {
      if (dataForm.senha === dataForm.confirmar_senha) {
        const response = await createClient.createClient(dataForm);
        console.log(response);
        addToast("Usuário cadastrado com sucesso!", ToastType.success);
        navigate(RoutesEnum.REGISTRO_CLIENTE);
      } else {
        throw new Error("Senhas não coincidem");
      }
    } catch (error) {
      addToast(
        "ERRO! Verifique com o administrador do Sistema",
        ToastType.error
      );
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (dataForm: IFormLogin) => {
    setLoading(true);

    try {
      const response = await authService.login(dataForm);
      console.log(response);
      navigate(RoutesEnum.TICKET_DO_CLIENTE);
    } catch (error) {
      addToast(
        "Error ao realizar login, verifique suas credenciais",
        ToastType.error
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    onSubmitRegisterClient,
    onSubmit,
  };
}
