import { ReactNode } from "react";
import { FooterContent } from "./styles";

interface FooterProps {
  children: ReactNode;
}

export function Footer({ children, ...rest }: FooterProps) {
  return <FooterContent {...rest}>{children}</FooterContent>;
}
