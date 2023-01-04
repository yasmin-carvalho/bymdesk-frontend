import { useAuth } from "../hooks/useAuth";

interface ProtectLayoutProps {
  children: React.ReactElement;
}

export function ProtectLayout({ children }: ProtectLayoutProps) {
  const auth = useAuth();

  if (auth.email) {
    return children;
  }
  return <span>Você não possui acesso</span>;
}
