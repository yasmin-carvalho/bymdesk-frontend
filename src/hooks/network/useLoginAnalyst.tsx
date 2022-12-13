import { useNavigate } from "react-router-dom";
import { UseFormReset } from "react-hook-form";

import { ToastType } from "../../components/Snackbar/enumToast";
import { RoutesEnum } from "../../constants/routesList";
import { useLoading } from "../../contexts/LoadingContext";
import { useToast } from "../../contexts/ToastContext";
import { IFormLogin } from "../../dtos/ILoginDTO";
import { IFormRegisterAnalyst } from "../../dtos/IRegisterAnalystDTO";
import AuthServiceAnalyst from "../../services/AuthServiceAnalyst";

export function useLoginAnalyst() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();

  const authServiceAnalyst = new AuthServiceAnalyst();

  const onSubmitRegisterAnalyst = (
    dataForm: IFormRegisterAnalyst,
    reset: UseFormReset<IFormRegisterAnalyst>
  ) => {
    setLoading(true);

    setTimeout(() => {
      alert(JSON.stringify(dataForm));
      addToast("Analista cadastrado com sucesso", ToastType.success);
      setLoading(false);
    }, 2500);
  };

  const onSubmitLogin = async (dataForm: IFormLogin) => {
    setLoading(true);

    try {
      const response = await authServiceAnalyst.login(dataForm);
      console.log(response);
      navigate(RoutesEnum.PORTAL_DO_ANALISTA);
    } catch (error) {
      addToast(
        "Error ao realizar login, verifique suas crendencias",
        ToastType.error
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    onSubmitRegisterAnalyst,
    onSubmitLogin,
  };
}
