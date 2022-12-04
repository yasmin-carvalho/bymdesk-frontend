import { Control, Controller } from "react-hook-form";
import ReactSelect from "react-select";

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
            <StyledReactSelect {...field} options={options} />
          )}
        />
      ) : (
        <StyledSelect onChange={onChangeStateControled}>
          <Optin value="">{placeholder ?? ""}</Optin>
          {options.map((item) => (
            <Optin key={item}>{item}</Optin>
          ))}
        </StyledSelect>
      )}
    </Container>
  );
}
