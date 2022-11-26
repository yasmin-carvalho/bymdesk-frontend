import { Button } from "../../../../components/Button";
import { TabContainer } from "../../../../components/Tabs/styles";
import { Main } from "../../styles";
import { Container, Content, StyledInput, Text } from "./styles";

export function Location() {
  return (
    <TabContainer>
      <Main>
        <Container>
          <Text>Inscrição de Local</Text>
          <StyledInput label="Digite um novo Local" required />
          <StyledInput label="Confirme o Local" required />
        </Container>
        <Content>
          <Button>REGISTRAR</Button>
          <Button>CANCELAR</Button>
        </Content>
      </Main>
    </TabContainer>
  );
}
