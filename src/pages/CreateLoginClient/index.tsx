import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, ContentButton, Main } from "./styles";

export function CreateLoginClient() {
  return (
    <>
      <Header typeScreen="login" />
      <Main>
        <Container>
          <Input label="Nome" required />
          <Input type="email" label="Email" required />
          <Input type="email" label="Email opcional" />
          <Input type="tel" label="Telefone" mask="(99) 99999-9999" />
          <Input type="password" label="Senha" required />
          <Input type="password" label="Confirmar Senha" required />
          <ContentButton>
            <Button>Registrar</Button>
            <Button>Cancelar</Button>
          </ContentButton>
        </Container>
      </Main>
    </>
  );
}
