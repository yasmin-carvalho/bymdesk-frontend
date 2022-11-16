import {
  Asterisco,
  Container,
  ContainerLabel,
  StyledInput,
  Label,
} from "./styles";

interface InputProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  labelColum?: string;
  type?: React.HTMLInputTypeAttribute;
}

export function Input({
  label,
  required,
  placeholder,
  labelColum,
  type,
}: InputProps) {
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
      <StyledInput placeholder={placeholder} type={type} />
    </Container>
  );
}
