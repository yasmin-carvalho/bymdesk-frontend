import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
}

export function Button({ onClick, children, bgColor }: ButtonProps) {
  return (
    <StyledButton type="button" onClick={onClick} bgColor={bgColor}>
      {children}
    </StyledButton>
  );
}
