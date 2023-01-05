import { useAuth } from "../hooks/useAuth";
import { ImgUnauthorized } from "./styles";
import IMG from "../assets/401-ErrorUnauthorized-rafiki.png";
import { EnumTypeUser } from "../constants/enums";

interface ProtectLayoutProps {
  children: React.ReactElement;
  accessUser: EnumTypeUser;
}

export function ProtectLayout({ children, accessUser }: ProtectLayoutProps) {
  const { role } = useAuth();

  if (role === accessUser || role === EnumTypeUser.ADMIN) {
    return children;
  }
  return <ImgUnauthorized src={IMG} alt="unauthorized" />;
}
