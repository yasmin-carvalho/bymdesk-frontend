import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm, UseFormReset } from "react-hook-form";
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
import { useLocation } from "../../../../hooks/network/useLocation";
import { useTicket } from "../../../../hooks/network/useTicket";
import { Form, ButtonBlock, StyledButton, Text } from "./styles";

export function InitTab() {
  const formIdRegisterTicket = "form-register-ticket";
  const {
    handleSubmit: handleSubmitRegister,
    control: controlRegister,
    setValue,
    formState: { isValid: isValidRegister },
    reset,
  } = useForm<IFormRegisterTicket>({
    resolver: yupResolver(schemaRegisterTicket),
    defaultValues: {
      [fieldsRegisterTicket.BLOCO]: { value: "", label: "" },
      [fieldsRegisterTicket.LOCAL]: { value: "", label: "" },
      [fieldsRegisterTicket.TIPO_DE_MANUTENCAO]: { value: "", label: "" },
      [fieldsRegisterTicket.DESCRICAO]: "",
      [fieldsRegisterTicket.ANEXAR_ARQUIVO]: null,
    },
  });

  const { onSubmitRegisterTicket, loading } = useTicket();

  const { blocksState, getBlocks } = useBlock();

  const { localesState, getLocales } = useLocation();

  useEffect(() => {
    getBlocks();
    getLocales();
  }, []);

  return (
    <TabContainer>
      <Form
        id={formIdRegisterTicket}
        onSubmit={handleSubmitRegister((data: IFormRegisterTicket) => {
          onSubmitRegisterTicket(data, reset);
        })}
      >
        <Text>Enviar um Ticket</Text>
        <Select
          label="Bloco"
          required
          options={blocksState.map((item) => ({
            value: item.id,
            label: item.nome,
          }))}
          name={fieldsRegisterTicket.BLOCO}
          control={controlRegister}
          disabled={loading}
        />
        <Select
          label="Local"
          required
          options={localesState.map((item) => ({
            value: item.id,
            label: item.nome,
          }))}
          name={fieldsRegisterTicket.LOCAL}
          control={controlRegister}
          disabled={loading}
        />
        <Select
          label="Tipo de Manutenção"
          required
          options={optionsSetor}
          name={fieldsRegisterTicket.TIPO_DE_MANUTENCAO}
          control={controlRegister}
          disabled={loading}
        />
        <TextArea
          label="Descrição"
          required
          placeholder="Digite a descrição do incidente"
          name={fieldsRegisterTicket.DESCRICAO}
          control={controlRegister}
          disabled={loading}
        />
        <Input
          type="file"
          label="+ Anexar arquivo"
          name={fieldsRegisterTicket.ANEXAR_ARQUIVO}
          setValue={setValue}
          control={controlRegister}
          disabled={loading}
        />

        <ButtonBlock>
          <StyledButton
            type="submit"
            form={formIdRegisterTicket}
            disabled={!isValidRegister || loading}
          >
            Enviar
          </StyledButton>
        </ButtonBlock>
      </Form>
    </TabContainer>
  );
}
