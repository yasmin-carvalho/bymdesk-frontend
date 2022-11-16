import {
  Asterisco,
  Container,
  ContainerLabel,
  Label,
  StyledTextArea,
} from "./styles";

interface TextAreaProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  labelColum?: string;
}

export function TextArea({
  label,
  required,
  placeholder,
  labelColum,
}: TextAreaProps) {
  return (
    <Container isRow={!!label}>
      {label && (
        <ContainerLabel>
          <Label>{label}</Label>
          {required && <Asterisco>*</Asterisco>}
        </ContainerLabel>
      )}
      {labelColum && (
        <ContainerLabel>
          <Label>{labelColum}</Label>
          {required && <Asterisco>*</Asterisco>}
        </ContainerLabel>
      )}
      <StyledTextArea placeholder={placeholder} />
    </Container>
  );
}
