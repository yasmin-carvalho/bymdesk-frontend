import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { TabContainer } from "../../../../components/Tabs/styles";
import { TextArea } from "../../../../components/TextArea";
import { optionsSetor } from "../../../../constants/listSelects";
import {
  fieldsRegisterTicket,
  IFormRegisterTicket,
  schemaRegisterTicket,
} from "../../../../dtos/IRegisterTicketDTO";
import { useBlock } from "../../../../hooks/network/useBlock";
import { useTicket } from "../../../../hooks/network/useTicket";
import { Form, ButtonBlock, StyledButton, Text } from "./styles";

export function InitTab() {
  const formIdRegisterTicket = "form-register-ticket";
  const {
    handleSubmit: handleSubmitRegister,
    control: controlRegister,
    formState: { isValid: isValidRegister },
  } = useForm<IFormRegisterTicket>({
    resolver: yupResolver(schemaRegisterTicket),
    defaultValues: {
      [fieldsRegisterTicket.BLOCO]: { value: "", label: "" },
      [fieldsRegisterTicket.LOCAL]: { value: "", label: "" },
      [fieldsRegisterTicket.TIPO_DE_MANUTENCAO]: { value: "", label: "" },
      [fieldsRegisterTicket.DESCRICAO]: "",
      [fieldsRegisterTicket.ANEXAR_ARQUIVO]: "",
    },
  });

  const [file, setFile] = useState(null);

  const { onSubmitRegisterTicket } = useTicket();

  const { blocksState, getBlocks } = useBlock();

  useEffect(() => {
    getBlocks();
  }, []);

  return (
    <TabContainer>
      <Form
        id={formIdRegisterTicket}
        onSubmit={handleSubmitRegister((data: IFormRegisterTicket) => {
          console.log("eitaaaaa");
          onSubmitRegisterTicket(data);
        })}
      >
        <Text>Enviar um Ticket</Text>
        <Select
          label="Bloco"
          required
          options={blocksState.map((item) => ({ value: item, label: item }))}
          name={fieldsRegisterTicket.BLOCO}
          control={controlRegister}
        />
        <Select
          label="Local"
          required
          options={[]}
          name={fieldsRegisterTicket.LOCAL}
          control={controlRegister}
        />
        <Select
          label="Tipo de Manutenção"
          required
          options={optionsSetor}
          name={fieldsRegisterTicket.TIPO_DE_MANUTENCAO}
          control={controlRegister}
        />
        <TextArea
          label="Descrição"
          required
          placeholder="Digite a descrição do incidente"
          name={fieldsRegisterTicket.DESCRICAO}
          control={controlRegister}
        />
        <Input
          type="file"
          label="+ Anexar arquivo"
          name={fieldsRegisterTicket.ANEXAR_ARQUIVO}
          control={controlRegister}
        />

        <ButtonBlock>
          <StyledButton
            type="submit"
            form={formIdRegisterTicket}
            disabled={!isValidRegister}
          >
            Enviar
          </StyledButton>
        </ButtonBlock>
      </Form>
    </TabContainer>
  );
}
