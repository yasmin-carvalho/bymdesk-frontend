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
import { Checkbox } from "../../components/Checkbox";
import { Button } from "../../components/Button";
import imgIncidentes from "../../assets/img-incidentes.png";
import imgFone from "../../assets/img-fone-de-ouvido.png";
import { Footer } from "../../components/Footer";
import { RoutesEnum } from "../../constants/routesList";
import { fieldsLogin, IFormLogin, schemaLogin } from "../../dtos/ILoginDTO";
import { Loading } from "../../components/Loading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../contexts/ToastContext";
import { ToastType } from "../../components/Snackbar/enumToast";

export function LoginClient() {
  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      [fieldsLogin.EMAIL]: "",
      [fieldsLogin.PASSWORD]: "",
      // [fieldsLogin.REMEMBER_ME]: false,
    },
  });

  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const navigate = useNavigate();

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

  return (
    <>
      <Loading open={loading} handleClose={() => setLoading(false)} />
      <Header typeScreen="login" />

      <Main>
        <ContainerLeft>
          <Title>BYMdesk</Title>
          <SubTitle>Registro de Incidentes UNIFEI</SubTitle>
          <Image src={imgIncidentes} alt="incidentes" />
        </ContainerLeft>
        <Form
          noValidate
          onSubmit={handleSubmit((data: IFormLogin) => onSubmit(data))}
        >
          <Text>Insira os detalhes abaixo</Text>
          <Input
            type="email"
            placeholder="Seu endereço de email"
            name={fieldsLogin.EMAIL}
            control={control}
          />
          <Input
            type="password"
            placeholder="Senha"
            name={fieldsLogin.PASSWORD}
            control={control}
          />
          {/* <Checkbox
            label="lembrar de mim neste computador"
            name={fieldsLogin.REMEMBER_ME}
            control={control}
          /> */}
          <Button type="submit" disabled={!isValid}>
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
