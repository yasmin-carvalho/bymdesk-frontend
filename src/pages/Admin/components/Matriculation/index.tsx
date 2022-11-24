import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Main } from "../../styles";
import { Container, Content, Text } from "./styles";

export function Matriculation() {
  return (
    <Main>
      <Container>
        <Text>Inscrição de Matrícula para Analistas</Text>
        <Input label="Digite uma nova Matrícula" required />
        <Input label="Confirme a Matrícula" required />
      </Container>
      <Content>
        <Button>REGISTRAR</Button>
        <Button>CANCELAR</Button>
      </Content>
    </Main>
  );
}
