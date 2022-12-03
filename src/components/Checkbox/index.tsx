import { Controller, Control } from "react-hook-form";
import { Container, Check, Label } from "./styles";

interface CheckboxProps {
  label?: string;
  name: string;
  control: Control<any>;
  required?: boolean;
  disabled?: boolean;
}

export function Checkbox({
  label,
  name,
  control,
  required,
  disabled,
  ...rest
}: CheckboxProps) {
  return (
    <Container {...rest}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Check
              type="checkbox"
              checked={value}
              onChange={onChange}
              required={required}
              disabled={disabled}
            />
            {label && <Label>{label}</Label>}
          </>
        )}
      ></Controller>
    </Container>
  );
}
