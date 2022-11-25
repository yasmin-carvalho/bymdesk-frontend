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
  isStateControlled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  placeholder?: string;
}

export function Select({
  label,
  required,
  labelColum,
  array,
  isStateControlled,
  onChange,
  placeholder,
  ...rest
}: SelectProps) {
  return (
    <Container isRow={!!label} {...rest}>
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

      <StyledSelect onChange={onChange}>
        <Optin value="">{placeholder ?? ""}</Optin>
        {array.map((item) => (
          <Optin key={item}>{item}</Optin>
        ))}
      </StyledSelect>
    </Container>
  );
}
