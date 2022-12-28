import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FooterForm } from "../../../../components/FooterForm";
import { TabContainer } from "../../../../components/Tabs/styles";
import {
  fieldsLocation,
  IFormLocationDTO,
  schemaLocation,
} from "../../../../dtos/ILocationDTO";
import { useLocation } from "../../../../hooks/network/useLocation";
import { Container, Form, StyledInput, Text } from "./styles";

export function Location() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<IFormLocationDTO>({
    resolver: yupResolver(schemaLocation),
    defaultValues: {
      [fieldsLocation.NOME]: "",
      [fieldsLocation.CONFIRME_LOCALIZACAO]: "",
    },
  });

  const { onSubmit } = useLocation();

  return (
    <TabContainer>
      <Form
        onSubmit={handleSubmit((data: IFormLocationDTO) =>
          onSubmit(data, reset)
        )}
      >
        <Container>
          <Text>Inscrição de Local</Text>
          <StyledInput
            label="Digite um novo Local"
            required
            name={fieldsLocation.NOME}
            control={control}
          />
          <StyledInput
            label="Confirme o Local"
            required
            name={fieldsLocation.CONFIRME_LOCALIZACAO}
            control={control}
          />
        </Container>
        <FooterForm textButtonSubmit="REGISTRAR" disabled={!isValid} />
      </Form>
    </TabContainer>
  );
}
