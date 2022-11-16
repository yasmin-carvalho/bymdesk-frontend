import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Footer, FooterButton, Main } from "./styles";

export function CreateLoginClient() {
  return (
    <>
      <Header typeScreen="login" />
      <Main>
        <Container>
          <Input label="Nome" required />
          <Input type="email" label="Email" required />
          <Input type="email" label="Email opcional" />
          <Input type="tel" label="Telefone" />
          <Input type="password" label="Senha" required />
          <Input type="password" label="Confirmar Senha" required />
        </Container>
      </Main>
      <Footer>
        <FooterButton>
          <Button>Registrar</Button>
          <Button>Cancelar</Button>
        </FooterButton>
      </Footer>
    </>
  );
}
