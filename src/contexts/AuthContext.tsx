import React, { createContext, useEffect, useState } from "react";
import { useLogin } from "../hooks/network/useLogin";
import { IAuthProvider, IContext, IUser } from "./utils/types";
import { getUserLocalStorage, setUserLocalStorage } from "./utils/utils";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();
  const { onSubmit } = useLogin();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(
    email: string,
    password: string
  ): Promise<IUser | null> {
    const response = await onSubmit({ email, senha: password });

    setUser(response);
    setUserLocalStorage(response);
    return response;
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
