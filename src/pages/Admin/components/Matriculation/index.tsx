import { Button } from "../../../../components/Button";
import { TabContainer } from "../../../../components/Tabs/styles";
import { Main } from "../../styles";
import { Container, Content, StyledInput, Text } from "./styles";

export function Matriculation() {
  return (
    <TabContainer>
      <Main>
        <Container>
          <Text>Inscrição de Matrícula para Analistas</Text>
          <StyledInput label="Digite uma nova Matrícula" required />
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
