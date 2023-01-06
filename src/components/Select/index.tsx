import { on } from "events";
import { Control, Controller } from "react-hook-form";

import {
  Asterisco,
  Container,
  ContainerLabel,
  Label,
  StyledSelect,
  Optin,
  StyledReactSelect,
} from "./styles";

interface SelectProps {
  label?: string;
  required?: boolean;
  labelColum?: string;
  options: any[];
  isStateControlled?: boolean;
  onChangeStateControled?: React.ChangeEventHandler<HTMLSelectElement>;
  placeholder?: string;
  control?: Control<any>;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLSelectElement>;
  value?: string | number | readonly string[];
  disabled?: boolean;
  onMenuClose?: () => void;
}

export function Select({
  label,
  required,
  labelColum,
  options,
  isStateControlled,
  onChangeStateControled,
  placeholder,
  name,
  control,
  onClick,
  value,
  disabled,
  onMenuClose,
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

      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
            <StyledReactSelect
              {...field}
              options={options}
              isDisabled={disabled}
              onMenuClose={onMenuClose}
            />
          )}
        />
      ) : (
        <StyledSelect
          onChange={onChangeStateControled}
          onClick={onClick}
          value={value}
          disabled={disabled}
        >
          <Optin value="">{placeholder ?? ""}</Optin>
          {options.map((item) => (
            <Optin key={item}>{item}</Optin>
          ))}
        </StyledSelect>
      )}
    </Container>
  );
}
