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
          <Input labelColum="Email" required gapColumn="5px" />
          <Input labelColum="Senha" required gapColumn="5px" />
          <Button>Entrar</Button>
        </ContainerLeft>
        <ContainerRight></ContainerRight>
      </Main>
    </>
  );
}
