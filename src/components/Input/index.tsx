import {
  Asterisco,
  Container,
  ContainerLabel,
  StyledInput,
  Label,
} from "./styles";

interface InputProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
}
export function Input({ label, required, placeholder }: InputProps) {
  return (
    <Container>
      {label && (
        <ContainerLabel>
          <Label>{label}</Label>
          {required && <Asterisco>*</Asterisco>}
        </ContainerLabel>
      )}
      <StyledInput placeholder={placeholder} />
    </Container>
  );
}
