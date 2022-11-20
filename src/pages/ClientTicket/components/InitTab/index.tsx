import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { TabContainer } from "../../../../components/Tabs/styles";
import { TextArea } from "../../../../components/TextArea";
import { BlockTicket, ButtonBlock, StyledButton, Text } from "./styles";

export function InitTab() {
  return (
    <TabContainer>
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
    </TabContainer>
  );
}
