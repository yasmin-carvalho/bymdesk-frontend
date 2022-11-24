import {
  ContainerLeft,
  ContainerRight,
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

export function LoginClient() {
  return (
    <>
      <Header typeScreen="login" />
      <Main>
        <ContainerLeft>
          <Title>BYMdesk</Title>
          <SubTitle>Registro de Incidentes UNIFEI</SubTitle>
          <Image src={imgIncidentes} alt="incidentes" />
        </ContainerLeft>
        <ContainerRight>
          <Text>Insira os detalhes abaixo</Text>
          <Input type="email" placeholder="Seu endereço de email" />
          <Input type="password" placeholder="Senha" />
          <Checkbox label="lembrar de mim neste computador" />
          <Button>Entrar</Button>
        </ContainerRight>
      </Main>
      <Footer>
        <ChildrenFooter>
          <TextFooter>Portal do Analista</TextFooter>
          <ContainerFooterTwo>
            <ImageFooter src={imgFone} alt="fone" />
            <Text>Você é um analista?</Text>
            <LinkFooter href="https://unifei.edu.br/">
              Fazer login aqui
            </LinkFooter>
          </ContainerFooterTwo>
        </ChildrenFooter>
      </Footer>
    </>
  );
}
