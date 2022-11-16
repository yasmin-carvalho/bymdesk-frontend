import {
  Asterisco,
  Container,
  ContainerLabel,
  Label,
  StyledSelect,
  Optin,
} from "./styles";

interface SelectProps {
  label?: string;
  required?: boolean;
  labelColum?: string;
  array: string[];
}

export function Select({ label, required, labelColum, array }: SelectProps) {
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
      <StyledSelect>
        <Optin value=""></Optin>
        {array.map((item) => (
          <Optin>{item}</Optin>
        ))}
      </StyledSelect>
    </Container>
  );
}
