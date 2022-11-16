import {
  Asterisco,
  Container,
  ContainerLabel,
  StyledInput,
  Label,
  ContentInputFile,
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
  ...rest
}: InputProps) {
  return (
    <Container isRow={!!label} {...rest}>
      {label && (
        <ContainerLabel>
          <Label>{type !== "file" ? label : ""}</Label>
          {required && <Asterisco>*</Asterisco>}
        </ContainerLabel>
      )}

      {labelColum && (
        <ContainerLabel>
          <Label>{type !== "file" ? labelColum : ""}</Label>
          {required && <Asterisco>*</Asterisco>}
        </ContainerLabel>
      )}

      {type === "file" ? (
        <ContentInputFile>
          <label htmlFor="arquivo">{label}</label>
          <input type="file" name="arquivo" id="arquivo" />
        </ContentInputFile>
      ) : (
        <StyledInput placeholder={placeholder} type={type} />
      )}
    </Container>
  );
}
