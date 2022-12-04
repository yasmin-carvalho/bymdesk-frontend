import { Control, Controller } from "react-hook-form";

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
  options: string[];
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
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <StyledSelect onChange={onChange}>
              <Optin value="">{placeholder ?? ""}</Optin>
              {options.map((item) => (
                <Optin key={item} value={value}>
                  {item}
                </Optin>
              ))}
            </StyledSelect>
          )}
        ></Controller>
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
