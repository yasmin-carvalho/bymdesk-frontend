import { Container, Check, Label } from "./styles";

interface CheckboxProps {
  label?: string;
}

export function Checkbox({ label, ...rest }: CheckboxProps) {
  return (
    <Container {...rest}>
      <Check type="checkbox" />
      {label && <Label>{label}</Label>}
    </Container>
  );
}
