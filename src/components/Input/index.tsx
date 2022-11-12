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
  gapColumn?: string;
}

export function Input({
  label,
  required,
  placeholder,
  labelColum,
  gapColumn,
}: InputProps) {
  return (
    <Container isRow={!!label} gapColumn={gapColumn}>
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
      <StyledInput placeholder={placeholder} />
    </Container>
  );
}
