import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FooterForm } from "../../../../components/FooterForm";
import { TabContainer } from "../../../../components/Tabs/styles";
import {
  fieldsMatriculation,
  IFormMatriculationDTO,
  schemaMatriculation,
} from "../../../../dtos/IMatriculationDTO";
import { useMatriculation } from "../../../../hooks/network/useMatriculation";
import { Container, Form, StyledInput, Text } from "./styles";

export function Matriculation() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<IFormMatriculationDTO>({
    resolver: yupResolver(schemaMatriculation),
    defaultValues: {
      [fieldsMatriculation.MATRICULA]: "",
      [fieldsMatriculation.CONFIRME_MATRICULA]: "",
    },
  });

  const { onSubmit } = useMatriculation();

  return (
    <TabContainer>
      <Form
        onSubmit={handleSubmit((data: IFormMatriculationDTO) =>
          onSubmit(data, reset)
        )}
      >
        <Container>
          <Text>Inscrição de Matrícula para Analistas</Text>
          <StyledInput
            label="Digite uma nova Matrícula"
            required
            mask="9999999999"
            name={fieldsMatriculation.MATRICULA}
            control={control}
          />
          <StyledInput
            label="Confirme a Matrícula"
            required
            mask="9999999999"
            name={fieldsMatriculation.CONFIRME_MATRICULA}
            control={control}
          />
        </Container>
        <FooterForm textButtonSubmit="REGISTRAR" disabled={!isValid} />
      </Form>
    </TabContainer>
  );
}
