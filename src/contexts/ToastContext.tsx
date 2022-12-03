import { createContext, ReactNode, useContext, useState } from "react";
import { Snackbar } from "../components/Snackbar";

import { ToastType } from "../components/Snackbar/enumToast";

export interface ToastContextData {
  addToast(message: string, type: ToastType): void;

  removeToast(): void;
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
);

interface IToast {
  open: boolean;
  message?: string;
  type?: ToastType;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<IToast>({
    open: false,
    message: "",
    type: ToastType.success,
  });

  const addToast = (message: string, type: ToastType) => {
    setToast({ open: true, message, type });
  };

  const removeToast = () => {
    setToast({
      open: false,
      message: "",
      type: ToastType.success,
    });
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <Snackbar
        open={toast.open}
        message={toast.message}
        severity={toast.type}
        onCloseAlert={() => setToast({ open: false })}
        onCloseSnack={() => setToast({ open: false })}
      />
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}

export { useToast, ToastProvider };

export default ToastProvider;
