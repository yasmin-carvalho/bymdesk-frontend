import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef } from "react";
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
import { useLocation } from "../../../../hooks/network/useLocation";
import { useTicket } from "../../../../hooks/network/useTicket";
import { ButtonBlock, Form, StyledButton, Text } from "./styles";

export function InitTab() {
  const formIdRegisterTicket = "form-register-ticket";
  const {
    handleSubmit: handleSubmitRegister,
    control: controlRegister,
    setValue,
    formState: { isValid: isValidRegister },
    reset,
    getValues,
  } = useForm<IFormRegisterTicket>({
    resolver: yupResolver(schemaRegisterTicket),
    defaultValues: {
      [fieldsRegisterTicket.BLOCO]: { value: "", label: "" },
      [fieldsRegisterTicket.LOCAL]: { value: "", label: "" },
      [fieldsRegisterTicket.TIPO]: { value: "", label: "" },
      [fieldsRegisterTicket.DESCRICAO]: "",
      [fieldsRegisterTicket.IMAGEM]: null,
    },
  });

  const { onSubmitRegisterTicket, loading } = useTicket();
  const { blocksState, getBlocks } = useBlock();
  const { localesState, getLocales } = useLocation();

  const refDisabledFieldLocal = useRef(true);

  const handleMenuClose = () => {
    refDisabledFieldLocal.current = false;
    getLocales(Number(getValues("bloco.value")));
  };

  useEffect(() => {
    getBlocks();
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
          onMenuClose={handleMenuClose}
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
          disabled={loading || refDisabledFieldLocal.current}
        />
        <Select
          label="Tipo de Manutenção"
          required
          options={optionsSetor}
          name={fieldsRegisterTicket.TIPO}
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
          name={fieldsRegisterTicket.IMAGEM}
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
