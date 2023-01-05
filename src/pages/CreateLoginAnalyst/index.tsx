import { useForm } from "react-hook-form";

import { Buttons, Form, Main, FormRight } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import Tooltip from "@mui/material/Tooltip";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { RoutesEnum } from "../../constants/routesList";
import { fieldsLogin, IFormLogin, schemaLogin } from "../../dtos/ILoginDTO";
import { useLoginAnalyst } from "../../hooks/network/useLoginAnalyst";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import {
  fieldsRegisterAnalyst,
  IFormRegisterAnalyst,
  schemaRegisterAnalyst,
} from "../../dtos/IRegisterAnalystDTO";
import { optionsSetor } from "../../constants/listSelects";
import { useAuth } from "../../hooks/useAuth";
import { EnumTypeUser } from "../../constants/enums";
import { useLogin } from "../../hooks/network/useLogin";

export function CreateLoginAnalystc() {
  const formIdLogin = "form-login";
  const {
    handleSubmit,
    control,
    formState: { isValid },
    reset,
  } = useForm<IFormLogin>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      [fieldsLogin.EMAIL]: "",
      [fieldsLogin.SENHA]: "",
    },
  });

  const formIdRegisterAnalyst = "form-register-analyst";
  const {
    handleSubmit: handleSubmitRegister,
    control: controlRegister,
    formState: { isValid: isValidRegister },
  } = useForm<IFormRegisterAnalyst>({
    resolver: yupResolver(schemaRegisterAnalyst),
    defaultValues: {
      [fieldsRegisterAnalyst.SETOR]: { value: "", label: "" },
      [fieldsRegisterAnalyst.MATRICULA]: "",
      [fieldsRegisterAnalyst.NOME]: "",
      [fieldsRegisterAnalyst.TELEFONE]: "",
      [fieldsRegisterAnalyst.EMAIL]: "",
      [fieldsRegisterAnalyst.SENHA]: "",
      [fieldsRegisterAnalyst.CONFIRMAR_SENHA]: "",
    },
  });

  const navigate = useNavigate();
  const { authenticate } = useAuth();
  const { loading } = useLogin();

  const { onSubmitRegisterAnalyst, loading: loadingRegisterAnalyst } =
    useLoginAnalyst();

  const handleSubmitLogin = async ({ email, senha }: IFormLogin) => {
    const response = await authenticate(email, senha);
    if (response.role === EnumTypeUser.ADMIN) {
      navigate(RoutesEnum.ADMIN);
    } else if (response.role === EnumTypeUser.ANALISTA) {
      navigate(RoutesEnum.PORTAL_DO_ANALISTA);
    } else {
      navigate(RoutesEnum.TICKET_DO_CLIENTE);
    }
  };

  return (
    <>
      <Header typeScreen="loginAnalyst" />
      <Main>
        <Form id={formIdLogin} onSubmit={handleSubmit(handleSubmitLogin)}>
          <Input
            labelColum="Email"
            type="email"
            required
            placeholder="Digite seu email"
            name={fieldsLogin.EMAIL}
            control={control}
            disabled={loading}
          />
          <Input
            labelColum="Senha"
            type="password"
            required
            placeholder="Digite sua senha"
            name={fieldsLogin.SENHA}
            control={control}
            disabled={loading}
          />
          <Button
            type="submit"
            form={formIdLogin}
            disabled={!isValid || loading}
          >
            Entrar
          </Button>
        </Form>

        <FormRight
          id={formIdRegisterAnalyst}
          onSubmit={handleSubmitRegister((data: IFormRegisterAnalyst) => {
            onSubmitRegisterAnalyst(data, reset);
          })}
        >
          <Select
            label="Setor Responsável"
            required
            options={optionsSetor}
            name={fieldsRegisterAnalyst.SETOR}
            control={controlRegister}
            disabled={loadingRegisterAnalyst}
          />
          <Input
            label="Matrícula"
            required
            mask="9999999999"
            name={fieldsRegisterAnalyst.MATRICULA}
            control={controlRegister}
            disabled={loadingRegisterAnalyst}
          />
          <Input
            label="Nome completo"
            required
            name={fieldsRegisterAnalyst.NOME}
            control={controlRegister}
            disabled={loadingRegisterAnalyst}
          />
          <Input
            label="Telefone"
            required
            mask="(99) 99999-9999"
            name={fieldsRegisterAnalyst.TELEFONE}
            control={controlRegister}
            disabled={loadingRegisterAnalyst}
          />
          <Input
            label="Email"
            type="email"
            required
            name={fieldsRegisterAnalyst.EMAIL}
            control={controlRegister}
            disabled={loadingRegisterAnalyst}
          />
          <Input
            label="Senha"
            type="password"
            required
            name={fieldsRegisterAnalyst.SENHA}
            control={controlRegister}
            disabled={loadingRegisterAnalyst}
          />
          <Input
            label="Confirmar senha"
            type="password"
            required
            name={fieldsRegisterAnalyst.CONFIRMAR_SENHA}
            control={controlRegister}
            disabled={loadingRegisterAnalyst}
          />
          <Buttons>
            <Button
              type="submit"
              form={formIdRegisterAnalyst}
              disabled={!isValidRegister || loadingRegisterAnalyst}
            >
              Registrar
            </Button>
            <Button
              onClick={() => navigate(RoutesEnum.LOGIN)}
              type="button"
              disabled={loadingRegisterAnalyst}
            >
              Cancelar
            </Button>
          </Buttons>
        </FormRight>
      </Main>
      <Footer>
        <Tooltip title="Caso não tenha um número de matrícula, você deve entrar em contato com o Administrador do Sistema para que crie sua matrícula. Você pode entrar em contato com o Administrador pelo email: yasmin.carvalho@unifei.edu.br ou telefone: (35)984128112">
          <ContactSupportIcon fontSize="large" />
        </Tooltip>
      </Footer>
    </>
  );
}
