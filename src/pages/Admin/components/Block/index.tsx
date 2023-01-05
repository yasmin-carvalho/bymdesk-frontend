import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { FooterForm } from "../../../../components/FooterForm";
import { TabContainer } from "../../../../components/Tabs/styles";
import {
  fieldsBlock,
  IFormBlockDTO,
  schemaBlock,
} from "../../../../dtos/IBlockDTO";
import { useBlock } from "../../../../hooks/network/useBlock";
import { Container, Form, StyledInput, Text } from "./styles";

export function Block() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<IFormBlockDTO>({
    resolver: yupResolver(schemaBlock),
    defaultValues: {
      [fieldsBlock.NOME]: "",
      [fieldsBlock.CONFIRME_BLOCO]: "",
    },
  });

  const { onSubmit, loading } = useBlock();

  return (
    <TabContainer>
      <Form
        onSubmit={handleSubmit((data: IFormBlockDTO) => onSubmit(data, reset))}
      >
        <Container>
          <Text>Inscrição de Bloco</Text>
          <StyledInput
            label="Digite um novo Bloco"
            required
            name={fieldsBlock.NOME}
            control={control}
            disabled={loading}
          />
          <StyledInput
            label="Confirme o Bloco"
            required
            name={fieldsBlock.CONFIRME_BLOCO}
            control={control}
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
