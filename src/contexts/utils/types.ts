export interface IUser {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  role: string;
  admin: boolean;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<IUser | null>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
