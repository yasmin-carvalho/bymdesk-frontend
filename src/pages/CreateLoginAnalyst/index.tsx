import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ContainerLeft, ContainerRight, Main } from "./styles";

export function CreateLoginAnalystc() {
  return (
    <>
      <Header typeScreen="loginAnalyst" />
      <Main>
        <ContainerLeft>
          <Input labelColum="Email" required />
          <Input labelColum="Senha" required />
          <Button>Entrar</Button>
        </ContainerLeft>
        <ContainerRight></ContainerRight>
      </Main>
    </>
  );
}
