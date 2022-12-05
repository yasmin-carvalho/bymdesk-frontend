import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ToastType } from "../../components/Snackbar/enumToast";
import { RoutesEnum } from "../../constants/routesList";
import { useLoading } from "../../contexts/LoadingContext";
import { useToast } from "../../contexts/ToastContext";
import { IFormLogin } from "../../dtos/ILoginDTO";
import { IFormRegisterClient } from "../../dtos/IRegisterClient";
import AuthService from "../../services/AuthService";

export function useLogin() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();

  const authService = new AuthService();

  const onSubmitRegisterClient = (
    dataForm: IFormRegisterClient,
    reset: UseFormReset<IFormRegisterClient>
  ) => {
    console.log(dataForm);
    setLoading(true);

    setTimeout(() => {
      alert(JSON.stringify(dataForm));
      addToast("Cliente cadastrado com sucesso", ToastType.success);
      setLoading(false);
    }, 2500);
  };

  const onSubmit = async (dataForm: IFormLogin) => {
    console.log(dataForm);
    setLoading(true);

    // setTimeout(() => {
    //   if (
    //     dataForm.email === "ygor@gmail.com" &&
    //     dataForm.password === "123456"
    //   ) {
    //     navigate(RoutesEnum.TICKET_DO_CLIENTE);
    //   } else {
    //     console.log("caiu");
    //     addToast("Falha no login. Verifique as credenciais", ToastType.error);
    //   }

    //   setLoading(false);
    // }, 2500);

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
