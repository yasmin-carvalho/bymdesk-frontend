import { Control, Controller } from "react-hook-form";
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
  control?: Control<any>;
  name?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;

  labelColum?: string;
  type?: React.HTMLInputTypeAttribute;
  isSearch?: boolean;
  isRow?: boolean;
  handleSearch?: (value: string) => void;
  disabled?: boolean;
  mask?: string;
}

export function Input({
  control,
  name,
  label,
  required,
  placeholder,
  labelColum,
  type,
  isSearch,
  isRow,
  handleSearch,
  disabled,
  mask,
  ...rest
}: InputProps) {
  const _renderInputControled = (
    value: any,
    onChange: (...event: any[]) => void
  ) => {
    if (mask) {
      return (
        <StyledInputMask
          mask={mask}
          maskChar="_"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
    } else {
      return (
        <StyledInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          isSearch={isSearch}
          type={type}
          onKeyUp={
            handleSearch ? (e: any) => handleSearch(e.target.value) : undefined
          }
          disabled={disabled}
        />
      );
    }
  };

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
          onKeyUp={
            handleSearch ? (e: any) => handleSearch(e.target.value) : undefined
          }
          disabled={disabled}
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
      ) : control ? (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>{_renderInputControled(value, onChange)}</>
          )}
        />
      ) : (
        <>{_renderInput()}</>
      )}
    </Container>
  );
}
