import {
  Asterisco,
  Container,
  ContainerLabel,
  StyledInput,
  Label,
  ContentInputFile,
  StyledSearchIcon,
} from "./styles";

interface InputProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  labelColum?: string;
  type?: React.HTMLInputTypeAttribute;
  isSearch?: boolean;
  isRow?: boolean;
}

export function Input({
  label,
  required,
  placeholder,
  labelColum,
  type,
  isSearch,
  isRow,
  ...rest
}: InputProps) {
  return (
    <Container isRow={!!label || !!isRow} {...rest}>
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

      {isSearch && <StyledSearchIcon />}

      {type === "file" ? (
        <ContentInputFile>
          <label htmlFor="arquivo">{label}</label>
          <input type="file" name="arquivo" id="arquivo" />
        </ContentInputFile>
      ) : (
        <StyledInput
          placeholder={placeholder}
          isSearch={isSearch}
          type={type}
        />
      )}
    </Container>
  );
}
