import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
}

export function Button({ children, bgColor, ...rest }: ButtonProps) {
  return (
    <StyledButton bgColor={bgColor} {...rest}>
      {children}
    </StyledButton>
  );
}
