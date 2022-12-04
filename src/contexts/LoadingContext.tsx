import { createContext, ReactNode, useContext, useState } from "react";
import { Loading } from "../components/Loading";

export interface LoadingContextData {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData
);

interface LoadingProviderProps {
  children: ReactNode;
}

const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <Loading open={loading} handleClose={() => setLoading(false)} />
      {children}
    </LoadingContext.Provider>
  );
};

function useLoading(): LoadingContextData {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}

export { useLoading, LoadingProvider };

export default LoadingProvider;
