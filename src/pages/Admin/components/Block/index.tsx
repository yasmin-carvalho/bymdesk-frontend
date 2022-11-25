import { Button } from "../../../../components/Button";
import { TabContainer } from "../../../../components/Tabs/styles";
import { Main } from "../../styles";
import { Container, Content, StyledInput, Text } from "./styles";

export function Block() {
  return (
    <TabContainer>
      <Main>
        <Container>
          <Text>Inscrição de Bloco</Text>
          <StyledInput label="Digite uma novo Bloco" required />
          <StyledInput label="Confirme a Matrícula" required />
        </Container>
        <Content>
          <Button>REGISTRAR</Button>
          <Button>CANCELAR</Button>
        </Content>
      </Main>
    </TabContainer>
  );
}
