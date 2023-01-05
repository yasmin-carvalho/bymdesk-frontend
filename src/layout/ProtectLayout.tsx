import { useAuth } from "../hooks/useAuth";
import { ImgUnauthorized } from "./styles";
import IMG from "../assets/401-ErrorUnauthorized-rafiki.png";

interface ProtectLayoutProps {
  children: React.ReactElement;
}

export function ProtectLayout({ children }: ProtectLayoutProps) {
  const auth = useAuth();

  if (auth.email) {
    return children;
  }
  return <ImgUnauthorized src={IMG} alt="unauthorized" />;
}
