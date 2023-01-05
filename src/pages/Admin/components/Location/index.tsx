import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FooterForm } from "../../../../components/FooterForm";
import { TabContainer } from "../../../../components/Tabs/styles";
import {
  fieldsLocation,
  IFormLocationDTO,
  schemaLocation,
} from "../../../../dtos/ILocationDTO";
import { useBlock } from "../../../../hooks/network/useBlock";
import { useLocation } from "../../../../hooks/network/useLocation";
import { Container, Form, StyledInput, StyledSelect, Text } from "./styles";

export function Location() {
  const {
    handleSubmit,
    control: controlRegister,
    reset,
    formState: { isValid },
  } = useForm<IFormLocationDTO>({
    resolver: yupResolver(schemaLocation),
    defaultValues: {
      [fieldsLocation.BLOCO_ID]: { value: "", label: "" },
      [fieldsLocation.NOME]: "",
      [fieldsLocation.CONFIRME_LOCALIZACAO]: "",
    },
  });

  const { blocksState, getBlocks } = useBlock();

  const { onSubmit, loading } = useLocation();

  useEffect(() => {
    getBlocks();
  }, []);

  return (
    <TabContainer>
      <Form
        onSubmit={handleSubmit((data: IFormLocationDTO) =>
          onSubmit(data, reset)
        )}
      >
        <Container>
          <Text>Inscrição de Local</Text>
          <StyledSelect
            label="Bloco"
            required
            options={blocksState.map((item) => ({
              value: item.id,
              label: item.nome,
            }))}
            name={fieldsLocation.BLOCO_ID}
            control={controlRegister}
            disabled={loading}
          />
          <StyledInput
            label="Digite um novo Local"
            required
            name={fieldsLocation.NOME}
            control={controlRegister}
            disabled={loading}
          />
          <StyledInput
            label="Confirme o Local"
            required
            name={fieldsLocation.CONFIRME_LOCALIZACAO}
            control={controlRegister}
            disabled={loading}
          />
        </Container>
        <FooterForm
          textButtonSubmit="REGISTRAR"
          disabled={!isValid || loading}
        />
      </Form>
    </TabContainer>
  );
}
