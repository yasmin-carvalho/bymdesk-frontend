import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { TextArea } from "../../components/TextArea";
import {
  BlockTicket,
  ButtonBlock,
  LinkBar,
  Main,
  PageBar,
  StyledButton,
  Text,
} from "./styles";

export function ClientTicket() {
  return (
    <>
      <Header typeScreen="PageClient" />
      <Main>
        <PageBar>
          <LinkBar href="https://unifei.edu.br/">Início</LinkBar>
          <LinkBar href="https://unifei.edu.br/">Meus Tickets</LinkBar>
          <LinkBar href="https://unifei.edu.br/">Mapa do Campus</LinkBar>
        </PageBar>
        <BlockTicket>
          <Text>Enviar um Ticket</Text>
          <Select label="Bloco" required array={["IMC", "IEST"]} />
          <Select label="Local" required array={["LDC2", "Sala 2"]} />
          <Select
            label="Tipo de Manutenção"
            required
            array={["Manutenção TI", "Manutenção Elétrica"]}
          />
          <TextArea
            label="Descrição"
            required
            placeholder="Digite a descrição do incidente"
          />
          <Input type="file" label="+ Anexar arquivo" />

          <ButtonBlock>
            <StyledButton onClick={() => {}}>Enviar</StyledButton>
          </ButtonBlock>
        </BlockTicket>
      </Main>
    </>
  );
}
