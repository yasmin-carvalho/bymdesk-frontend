import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  ContainerLeft,
  Form,
  Main,
  SubTitle,
  Text,
  Title,
  Image,
  ChildrenFooter,
  ContainerFooterTwo,
  ImageFooter,
  TextFooter,
  LinkFooter,
} from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
// import { Checkbox } from "../../components/Checkbox";
import { Button } from "../../components/Button";
import imgIncidentes from "../../assets/img-incidentes.png";
import imgFone from "../../assets/img-fone-de-ouvido.png";
import { Footer } from "../../components/Footer";
import { RoutesEnum } from "../../constants/routesList";
import { fieldsLogin, IFormLogin, schemaLogin } from "../../dtos/ILoginDTO";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { EnumTypeUser } from "../../constants/enums";
import { useLogin } from "../../hooks/network/useLogin";

export function LoginClient() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      [fieldsLogin.EMAIL]: "",
      [fieldsLogin.SENHA]: "",
      // [fieldsLogin.REMEMBER_ME]: false,
    },
  });

  const { authenticate } = useAuth();
  const { loading } = useLogin();
  const navigate = useNavigate();

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
      <Header typeScreen="login" />

      <Main>
        <ContainerLeft>
          <Title>BYMdesk</Title>
          <SubTitle>Registro de Incidentes UNIFEI</SubTitle>
          <Image src={imgIncidentes} alt="incidentes" />
        </ContainerLeft>
        <Form noValidate onSubmit={handleSubmit(handleSubmitLogin)}>
          <Text>Insira os detalhes abaixo</Text>
          <Input
            type="email"
            placeholder="Seu endereço de email"
            name={fieldsLogin.EMAIL}
            control={control}
            disabled={loading}
          />
          <Input
            type="password"
            placeholder="Senha"
            name={fieldsLogin.SENHA}
            control={control}
            disabled={loading}
          />
          {/* <Checkbox
            label="lembrar de mim neste computador"
            name={fieldsLogin.REMEMBER_ME}
            control={control}
          /> */}
          <Button type="submit" disabled={!isValid || loading}>
            Entrar
          </Button>
        </Form>
      </Main>

      <Footer>
        <ChildrenFooter>
          <TextFooter>Portal do Analista</TextFooter>
          <ContainerFooterTwo>
            <ImageFooter src={imgFone} alt="fone" />
            <Text>Você é um analista?</Text>
            <LinkFooter to={RoutesEnum.REGISTRO_DO_ANALISTA}>
              Fazer login aqui
            </LinkFooter>
          </ContainerFooterTwo>
        </ChildrenFooter>
      </Footer>
    </>
  );
}
