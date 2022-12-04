import { useNavigate } from "react-router-dom";

import { ToastType } from "../../components/Snackbar/enumToast";
import { RoutesEnum } from "../../constants/routesList";
import { useLoading } from "../../contexts/LoadingContext";
import { useToast } from "../../contexts/ToastContext";
import { IFormLogin } from "../../dtos/ILoginDTO";
import { IFormRegisterAnalyst } from "../../dtos/IRegisterAnalystDTO";

export function useLoginAnalyst() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();

  const navigate = useNavigate();

  const onSubmitRegisterAnalyst = (dataForm: IFormRegisterAnalyst) => {
    console.log("caiuuuu", dataForm);
    setLoading(true);

    setTimeout(() => {
      alert(JSON.stringify(dataForm));
      addToast("Analista cadastrado com sucesso", ToastType.success);
      setLoading(false);
    }, 2500);
  };

  const onSubmitLogin = (dataForm: IFormLogin) => {
    setLoading(true);

    setTimeout(() => {
      alert(JSON.stringify(dataForm));
      addToast("Login realizado com sucesso", ToastType.success);
      navigate(RoutesEnum.PORTAL_DO_ANALISTA);
      setLoading(false);
    }, 2500);
  };

  return {
    loading,
    setLoading,
    onSubmitRegisterAnalyst,
    onSubmitLogin,
  };
}
