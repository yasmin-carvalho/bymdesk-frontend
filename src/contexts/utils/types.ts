import { EnumTypeTicket, EnumTypeUser } from "../../constants/enums";

export interface IUser {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  role: EnumTypeUser;
  admin: boolean;
  setor?: EnumTypeTicket;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<IUser | null>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
