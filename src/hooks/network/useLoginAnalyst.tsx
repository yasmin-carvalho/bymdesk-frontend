import { useNavigate } from "react-router-dom";
import { UseFormReset } from "react-hook-form";

import { ToastType } from "../../components/Snackbar/enumToast";
import { RoutesEnum } from "../../constants/routesList";
import { IFormLogin } from "../../dtos/ILoginDTO";
import { IFormRegisterAnalyst } from "../../dtos/IRegisterAnalystDTO";
import AuthServiceAnalyst from "../../services/AuthServiceAnalyst";
import CreateAnalystService from "../../services/CreateAnalystService";
import { EnumTypeUser } from "../../constants/enums";
import { useToast } from "../useToast";
import { useLoading } from "../useLoading";

export function useLoginAnalyst() {
  const { addToast } = useToast();
  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();

  const authServiceAnalyst = new AuthServiceAnalyst();

  const createAnalyst = new CreateAnalystService();

  const onSubmitRegisterAnalyst = async (
    dataForm: IFormRegisterAnalyst,
    reset: UseFormReset<IFormRegisterAnalyst>
  ) => {
    try {
      if (dataForm.senha === dataForm.confirmar_senha) {
        await createAnalyst.createAnalyst({
          ...dataForm,
          setor: dataForm.setor.value,
          role: EnumTypeUser.ANALISTA,
          admin: false,
        });

        addToast("Analista cadastrado com sucesso!", ToastType.success);
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

  const onSubmitLogin = async (dataForm: IFormLogin) => {
    setLoading(true);

    try {
      await authServiceAnalyst.login(dataForm);
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
