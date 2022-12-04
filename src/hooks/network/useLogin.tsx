import { useNavigate } from "react-router-dom";

import { ToastType } from "../../components/Snackbar/enumToast";
import { RoutesEnum } from "../../constants/routesList";
import { useLoading } from "../../contexts/LoadingContext";
import { useToast } from "../../contexts/ToastContext";
import { IFormLogin } from "../../dtos/ILoginDTO";
import { IFormRegisterClient } from "../../dtos/IRegisterClient";

export function useLogin() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();

  const navigate = useNavigate();

  const onSubmitRegisterClient = (dataForm: IFormRegisterClient) => {
    console.log(dataForm);
    setLoading(true);

    setTimeout(() => {
      alert(JSON.stringify(dataForm));
      addToast("Cliente cadastrado com sucesso", ToastType.success);
      setLoading(false);
    }, 2500);
  };

  const onSubmit = (dataForm: IFormLogin) => {
    console.log(dataForm);
    setLoading(true);

    setTimeout(() => {
      if (
        dataForm.email === "ygor@gmail.com" &&
        dataForm.password === "123456"
      ) {
        navigate(RoutesEnum.TICKET_DO_CLIENTE);
      } else {
        console.log("caiu");
        addToast("Falha no login. Verifique as credenciais", ToastType.error);
      }

      setLoading(false);
    }, 2500);
  };

  return {
    loading,
    setLoading,
    onSubmitRegisterClient,
    onSubmit,
  };
}
