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
      [fieldsBlock.BLOCO]: "",
      [fieldsBlock.CONFIRME_BLOCO]: "",
    },
  });

  const { onSubmit } = useBlock();

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
            name={fieldsBlock.BLOCO}
            control={control}
          />
          <StyledInput
            label="Confirme o Bloco"
            required
            name={fieldsBlock.CONFIRME_BLOCO}
            control={control}
          />
        </Container>
        <FooterForm textButtonSubmit="REGISTRAR" disabled={!isValid} />
      </Form>
    </TabContainer>
  );
}
