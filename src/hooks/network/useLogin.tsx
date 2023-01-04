import { UseFormReset } from "react-hook-form";

import { ToastType } from "../../components/Snackbar/enumToast";
import { IUser } from "../../contexts/utils/types";

import { IFormLogin } from "../../dtos/ILoginDTO";
import { IFormRegisterClient } from "../../dtos/IRegisterClient";
import AuthService from "../../services/AuthService";
import CreateClientService from "../../services/CreateClienteService";
import { useLoading } from "../useLoading";
import { useToast } from "../useToast";

export function useLogin() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();

  const authService = new AuthService();

  const createClient = new CreateClientService();

  const onSubmitRegisterClient = async (
    dataForm: IFormRegisterClient,
    reset: UseFormReset<IFormRegisterClient>
  ) => {
    try {
      if (dataForm.senha === dataForm.confirmar_senha) {
        await createClient.createClient({
          ...dataForm,
          role: "client",
          admin: false,
        });

        addToast("Usuário cadastrado com sucesso!", ToastType.success);
        // navigate(RoutesEnum.REGISTRO_CLIENTE);
      } else {
        throw new Error("Senhas não coincidem");
      }
    } catch (error) {
      addToast(
        error?.message
          ? error?.message
          : "ERRO! Verifique com o administrador do Sistema",
        ToastType.error
      );
    } finally {
      setLoading(false);
      reset();
    }
  };

  const onSubmit = async (dataForm: IFormLogin): Promise<IUser | null> => {
    setLoading(true);

    let response: IUser = null;
    try {
      response = await authService.login(dataForm);
      console.log(response);
    } catch (error) {
      addToast(
        "Error ao realizar login, verifique suas credenciais",
        ToastType.error
      );
    } finally {
      setLoading(false);
    }

    return response;
  };

  return {
    loading,
    setLoading,
    onSubmitRegisterClient,
    onSubmit,
  };
}
