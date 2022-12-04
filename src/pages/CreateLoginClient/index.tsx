import { useForm } from "react-hook-form";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { RoutesEnum } from "../../constants/routesList";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IFormRegisterClient,
  schemaRegisterClient,
  fieldsRegisterClient,
} from "../../dtos/IRegisterClient";
import { Form, ContentButton, Main } from "./styles";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/network/useLogin";
import { Loading } from "../../components/Loading";

export function CreateLoginClient() {
  const formIdRegisterClient = "form-register-analyst";
  const {
    handleSubmit: handleSubmitRegister,
    control: controlRegister,
    formState: { isValid: isValidRegister },
  } = useForm<IFormRegisterClient>({
    resolver: yupResolver(schemaRegisterClient),
    defaultValues: {
      [fieldsRegisterClient.NOME]: "",
      [fieldsRegisterClient.TELEFONE]: "",
      [fieldsRegisterClient.EMAIL]: "",
      [fieldsRegisterClient.SENHA]: "",
      [fieldsRegisterClient.CONFIRMAR_SENHA]: "",
    },
  });

  const navigate = useNavigate();

  const { loading, onSubmitRegisterClient, setLoading } = useLogin();

  return (
    <>
      <Loading open={loading} handleClose={() => setLoading(false)} />
      <Header typeScreen="login" />
      <Main>
        <Form
          id={formIdRegisterClient}
          onSubmit={handleSubmitRegister((data: IFormRegisterClient) => {
            onSubmitRegisterClient(data);
          })}
        >
          <Input
            label="Nome"
            required
            name={fieldsRegisterClient.NOME}
            control={controlRegister}
          />
          <Input
            type="tel"
            label="Telefone"
            mask="(99) 99999-9999"
            name={fieldsRegisterClient.TELEFONE}
            control={controlRegister}
          />
          <Input
            type="email"
            label="Email"
            required
            name={fieldsRegisterClient.EMAIL}
            control={controlRegister}
          />
          <Input
            type="password"
            label="Senha"
            required
            name={fieldsRegisterClient.SENHA}
            control={controlRegister}
          />
          <Input
            type="password"
            label="Confirmar Senha"
            required
            name={fieldsRegisterClient.CONFIRMAR_SENHA}
            control={controlRegister}
          />
          <ContentButton>
            <Button
              type="submit"
              form={formIdRegisterClient}
              disabled={!isValidRegister}
            >
              Registrar
            </Button>
            <Button onClick={() => navigate(RoutesEnum.LOGIN)}>Cancelar</Button>
          </ContentButton>
        </Form>
      </Main>
    </>
  );
}
