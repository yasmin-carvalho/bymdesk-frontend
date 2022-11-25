import {
  Asterisco,
  Container,
  ContainerLabel,
  StyledInput,
  Label,
  ContentInputFile,
  StyledSearchIcon,
  StyledInputMask,
} from "./styles";

interface InputProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  labelColum?: string;
  type?: React.HTMLInputTypeAttribute;
  isSearch?: boolean;
  isRow?: boolean;
  mask?: string;
}

export function Input({
  label,
  required,
  placeholder,
  labelColum,
  type,
  isSearch,
  isRow,
  mask,
  ...rest
}: InputProps) {
  const _renderInput = () => {
    if (mask) {
      return (
        <StyledInputMask mask={mask} maskChar="_" placeholder={placeholder} />
      );
    } else {
      return (
        <StyledInput
          placeholder={placeholder}
          isSearch={isSearch}
          type={type}
        />
      );
    }
  };

  return (
    <Container isRow={!!label || !!isRow} {...rest}>
      {label && (
        <ContainerLabel isRow={!!label || !!isRow}>
          <Label>{type !== "file" ? label : ""}</Label>
          {required && <Asterisco>*</Asterisco>}
        </ContainerLabel>
      )}

      {labelColum && (
        <ContainerLabel isRow={!!label || !!isRow}>
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
        <>{_renderInput()}</>
      )}
    </Container>
  );
}
