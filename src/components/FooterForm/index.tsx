import { Button } from "../Button";
import { Content } from "./styles";

interface FooterFormProps {
  textButtonSubmit: string;
  textButtonCancel?: string;
  disabled: boolean;
}

export function FooterForm({
  textButtonSubmit,
  textButtonCancel,
  disabled,
}: FooterFormProps) {
  return (
    <Content alignRight={!textButtonCancel}>
      <Button type="submit" disabled={disabled}>
        {textButtonSubmit}
      </Button>
      {textButtonCancel && <Button type="button">{textButtonCancel}</Button>}
    </Content>
  );
}
