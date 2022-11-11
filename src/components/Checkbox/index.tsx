import { Container, Check, Label } from "./styles";

interface CheckboxProps {
  label?: string;
}

export function Checkbox({ label }: CheckboxProps) {
  return (
    <Container>
      <Check type="checkbox" />
      {label && <Label>{label}</Label>}
    </Container>
  );
}
